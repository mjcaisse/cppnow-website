'use strict';

const browserify = require('browserify');
const eventStream = require('event-stream');
const gulp = require('gulp');
const gulpHashFilename = require('gulp-hash-filename');
const gulpRename = require('gulp-rename');
const gulpUglify = require('gulp-uglify');
const readableStream = require('stream').Readable;
const vinylBuffer = require('vinyl-buffer');
const vinylSourceStream = require('vinyl-source-stream');

// We want the this to re-bind, so avoid arrow function
function onerror(e) {
    console.log(e);
    this.emit('end'); //eslint-disable-line no-invalid-this
}

module.exports = (options) => {
    const tasks = options.entries.map((entry) => {
        const browserifyOptions = {
            entries: [entry.src],
            paths: options.paths,
            insertGlobalVars: {
                process: false
            },
            transform: [
                ['envify', { global: true, NODE_ENV: options.env || 'development' }],
            ],
            plugin: [
                ['bundle-collapser/plugin'],
            ],
            debug: options.createSourcemaps || false,
        };

        let stream = browserify(browserifyOptions)
            .transform("babelify", {presets: ["es2015", "react"]})
            .bundle()
            .on('error', onerror)
            .pipe(vinylSourceStream(entry.filename))
            .pipe(vinylBuffer());

        if (options.hash) {
            stream = stream.pipe(gulpHashFilename({
                format: `{name}.h-{hash:8}{ext}`,
            }));
        }

        if (options.minify) {
            stream = stream.pipe(gulpUglify());
            stream = stream.on('error', onerror);
            stream = stream.pipe(gulpRename({
                suffix: '.min',
            }));
        }

        stream = stream.pipe(gulp.dest(options.dest));

        return stream;
    });

    return eventStream.merge.apply(null, tasks);
};

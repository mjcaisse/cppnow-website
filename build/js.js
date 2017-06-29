'use strict';

const gulp = require('gulp');
const gulpHashFilename = require('gulp-hash-filename');
const gulpRename = require('gulp-rename');
const gulpUglify = require('gulp-uglify');

// We want the this to re-bind, so avoid arrow function
function onerror(e) {
    console.log(e);
    this.emit('end'); //eslint-disable-line no-invalid-this
}

module.exports = (options) => {
    let stream = gulp.src(options.src);

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
};

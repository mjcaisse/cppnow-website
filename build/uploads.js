'use strict';

const gulp = require('gulp');
const gulpHashFilename = require('gulp-hash-filename');

module.exports = (options) => {
    let stream = gulp.src(options.src);

    if (options.hash) {
        stream = stream.pipe(gulpHashFilename({
            format: `{name}.h-{hash:8}{ext}`,
        }));
    }

    stream = stream.pipe(gulp.dest(options.dest));

    return stream;
};

'use strict';

const cssnano = require('cssnano');
const gulp = require('gulp');
const gulpHashFilename = require('gulp-hash-filename');
const gulpRename = require('gulp-rename');
const postcss = require('gulp-postcss');
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssSorting = require('postcss-sorting');
const postcssUtilities = require('postcss-utilities');

const cssSortingOptions = {
    'order': [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'rules',
        'at-rules',
    ],
    'properties-order': 'alphabetical',
    'clean-empty-lines': true,
};

// We want the this to re-bind, so avoid arrow function
function onerror(e) {
    console.log(e);
    this.emit('end'); //eslint-disable-line no-invalid-this
}

module.exports = (options) => {
    let stream = gulp.src(options.src)
        .on('error', onerror);

    const postcssOptions = [
        postcssImport,
        postcssMixins,
        postcssNested,
        postcssCssnext,
        postcssUtilities,
        postcssSorting(cssSortingOptions),
    ];

    if (options.minify) {
        postcssOptions.push(cssnano({
            autoprefixer: false,
        }));
    }

    stream = stream.pipe(postcss(postcssOptions));
    stream = stream.on('error', onerror);

    if (options.hash) {
        stream = stream.pipe(gulpHashFilename({
            format: `{name}.h-{hash:8}{ext}`,
        }));
    }

    if (options.minify) {
        stream = stream.pipe(gulpRename({
            suffix: '.min',
        }));
    }

    stream = stream.pipe(gulp.dest(options.dest));

    return stream;
};

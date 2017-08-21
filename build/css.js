'use strict';

const applyManifest = require(process.cwd() + '/build/applyManifest');
const buildManifest = require(process.cwd() + '/build/buildManifest');
const cssnano = require('cssnano');
const glob = require('glob');
const gulp = require('gulp');
const gulpHashFilename = require('gulp-hash-filename');
const gulpRename = require('gulp-rename');
const gulpReplace = require('gulp-replace');
const postcss = require('gulp-postcss');
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssSorting = require('postcss-sorting');
const postcssUtilities = require('postcss-utilities');

// Broken: https://github.com/dwighthouse/postcss-sorting-flex-issue
const cssSortingOptions = {
    'properties-order': 'alphabetical',
    'clean-empty-lines': true,
};

const defaultPostcssOptions = [
    postcssImport,
    postcssMixins,
    postcssNested,
    postcssSorting(cssSortingOptions),
    postcssCssnext,
    postcssUtilities,
];

// We want the this to re-bind, so avoid arrow function
function onerror(e) {
    console.log(e);
    this.emit('end'); //eslint-disable-line no-invalid-this
}

module.exports = (options, end) => {
    let postcssOptions = defaultPostcssOptions;

    if (options.minify) {
        postcssOptions = postcssOptions.concat(cssnano({
            autoprefixer: false,
        }));
    }

    glob(`${options.manifestBasePath}/**/*.*`, {}, (er, files) => {
        const manifest = buildManifest(files, options.manifestBasePath);

        let stream = gulp.src(options.src)
            .on('error', onerror);

        stream = stream.pipe(postcss(postcssOptions));
        stream = stream.on('error', onerror);

        stream = stream.pipe(gulpReplace(/url\s*\(\s*(?:(?:[^'"\s)]+)|(?:'\s*[^\s')]+\s*')|(?:"\s*[^\s")]+\s*"))\s*\)/g, (match) => {
            return match.replace(/(?:(url\s*\(\s*(?:'|")?\s*)([^'"\s)]+)(\s*(?:'|")?\s*\)))/g, (match, start, ref, end) => {
                return start + applyManifest(ref, manifest, options) + end;
            });
        }));

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

        stream.on('end', () => {
            end();
        });

        return stream;
    });
};

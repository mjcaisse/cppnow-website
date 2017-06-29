'use strict';

const applyManifest = require(process.cwd() + '/build/applyManifest');
const buildManifest = require(process.cwd() + '/build/buildManifest');
const glob = require('glob');
const gulp = require('gulp');
const gulpHtmlmin = require('gulp-htmlmin');
const gulpReplace = require('gulp-replace');
const path = require('path');

const htmlminOptions = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
};

module.exports = (options, end) => {
    glob(`${options.manifestBasePath}/**/*.*`, {}, (er, files) => {
        const manifest = buildManifest(files, options.manifestBasePath);

        let stream = gulp.src(options.src);

        stream = stream.pipe(gulpReplace(/(?:href|src|link)\s*=\s*(?:(?:'[^']+')|(?:"[^"]+"))/g, (match) => {
            return match.replace(/((?:href|src|link)\s*=\s*(?:'|"))([^'"]+)('|")/g, (match, start, ref, end) => {
                return start + applyManifest(ref, manifest, options) + end;
            });
        }));

        if (options.minify) {
            stream = stream.pipe(gulpHtmlmin(htmlminOptions));
        }

        stream = stream.pipe(gulp.dest(options.dest));

        stream.on('end', () => {
            end();
        });

        return stream;
    });
};

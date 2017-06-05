'use strict';

const _ = require('lodash');
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
    const isMinified = (pathObj) => {
        return (/\.min$/).test(pathObj.name);
    };

    const isHashed = (pathObj) => {
        return (/\.(h-[a-fA-F0-9]+)\./).test(pathObj.name);
    };

    const getNormalizedPath = (pathObj) => {
        const normalizedName = pathObj.name.replace(/\.h-[a-fA-F0-9]+\b/g, '').replace(/\.min/g, '');
        return `${pathObj.dir}/${normalizedName}${pathObj.ext}`;
    };

    const buildManifest = (files) => {
        return _.reduce(files, (accumulator, filepath) => {
            filepath = filepath.replace(options.src, '');
            const pathObj = path.parse(filepath);

            const normalizedFilepath = getNormalizedPath(pathObj);
            const fileIsHashed = isHashed(pathObj);
            const fileIsMinified = isMinified(pathObj);

            if (!_.has(accumulator, normalizedFilepath)) {
                accumulator[normalizedFilepath] = {};
            }

            let fileType = 'unmodified';

            if (fileIsHashed && fileIsMinified) {
                fileType = 'hashedMinifiedPath';
            }
            else if (fileIsHashed) {
                fileType = 'hashedPath';
            }
            else if (fileIsMinified) {
                fileType = 'minifiedPath';
            }

            accumulator[normalizedFilepath][fileType] = filepath;

            return accumulator;
        }, {});
    };

    glob(`${options.src}/**/*.*`, {}, (er, files) => {
        const manifest = buildManifest(files);

        let stream = gulp.src(`${options.src}/**/*.html`);

        stream = stream.pipe(gulpReplace(/(?:href|src|link)\s*=\s*(?:(?:'[^']+')|(?:"[^"]+"))/g, (match) => {
            return match.replace(/((?:href|src|link)\s*=\s*(?:'|"))([^'"]+)('|")/g, (match, start, ref, end) => {
                const pathObj = path.parse(ref);

                const normalizedFilepath = getNormalizedPath(pathObj);

                if (!_.has(manifest, normalizedFilepath)) {
                    return match;
                }

                const prefersMinified = options.preferMinifiedAssets || isMinified(pathObj);
                const prefersHashed = options.preferHashedAssets;

                if (prefersHashed && prefersMinified) {
                    ref = manifest[normalizedFilepath].hashedMinifiedPath ||
                          manifest[normalizedFilepath].hashedPath ||
                          manifest[normalizedFilepath].minifiedPath ||
                          manifest[normalizedFilepath].unmodified;
                }
                else if (prefersHashed && !prefersMinified) {
                    ref = manifest[normalizedFilepath].hashedPath ||
                          manifest[normalizedFilepath].hashedMinifiedPath ||
                          manifest[normalizedFilepath].unmodified ||
                          manifest[normalizedFilepath].minifiedPath;
                }
                else if (!prefersHashed && prefersMinified) {
                    ref = manifest[normalizedFilepath].minifiedPath ||
                          manifest[normalizedFilepath].hashedMinifiedPath ||
                          manifest[normalizedFilepath].unmodified ||
                          manifest[normalizedFilepath].hashedPath;
                }
                else {
                    ref = manifest[normalizedFilepath].unmodified ||
                          manifest[normalizedFilepath].minifiedPath ||
                          manifest[normalizedFilepath].hashedPath ||
                          manifest[normalizedFilepath].hashedMinifiedPath;
                }

                return start + ref + end;
            });
        }));

        if (options.minifyHtml) {
            stream = stream.pipe(gulpHtmlmin(htmlminOptions));
        }

        stream = stream.pipe(gulp.dest(options.dest));

        stream.on('end', () => {
            end();
        });

        return stream;
    });
};

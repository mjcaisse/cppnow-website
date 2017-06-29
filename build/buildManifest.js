'use strict';

const _ = require('lodash');
const getNormalizedPath = require(process.cwd() + '/build/getNormalizedPath');
const isHashed = require(process.cwd() + '/build/isHashed');
const isMinified = require(process.cwd() + '/build/isMinified');
const path = require('path');

module.exports = (files, src) => {
    return _.reduce(files, (accumulator, filepath) => {
        filepath = filepath.replace(src, '');
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

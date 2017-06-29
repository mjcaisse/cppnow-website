'use strict';

const _ = require('lodash');
const getNormalizedPath = require(process.cwd() + '/build/getNormalizedPath');
const isMinified = require(process.cwd() + '/build/isMinified');
const path = require('path');

module.exports = (ref, manifest, options) => {
    const pathObj = path.parse(ref);

    const normalizedFilepath = getNormalizedPath(pathObj);

    if (!_.has(manifest, normalizedFilepath)) {
        return ref;
    }

    const prefersMinified = options.preferMinifiedAssets || isMinified(pathObj);
    const prefersHashed = options.preferHashedAssets;

    if (prefersHashed && prefersMinified) {
        return manifest[normalizedFilepath].hashedMinifiedPath ||
               manifest[normalizedFilepath].hashedPath ||
               manifest[normalizedFilepath].minifiedPath ||
               manifest[normalizedFilepath].unmodified;
    }

    if (prefersHashed && !prefersMinified) {
        return manifest[normalizedFilepath].hashedPath ||
               manifest[normalizedFilepath].hashedMinifiedPath ||
               manifest[normalizedFilepath].unmodified ||
               manifest[normalizedFilepath].minifiedPath;
    }

    if (!prefersHashed && prefersMinified) {
        return manifest[normalizedFilepath].minifiedPath ||
               manifest[normalizedFilepath].hashedMinifiedPath ||
               manifest[normalizedFilepath].unmodified ||
               manifest[normalizedFilepath].hashedPath;
    }

    return manifest[normalizedFilepath].unmodified ||
           manifest[normalizedFilepath].minifiedPath ||
           manifest[normalizedFilepath].hashedPath ||
           manifest[normalizedFilepath].hashedMinifiedPath;
};

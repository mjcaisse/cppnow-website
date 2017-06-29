'use strict';

module.exports = (pathObj) => {
    return (/\.(h-[a-fA-F0-9]+)\./).test(pathObj.name);
};

'use strict';

module.exports = (pathObj) => {
    return (/\.min$/).test(pathObj.name);
};

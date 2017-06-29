'use strict';

module.exports = (pathObj) => {
    const normalizedName = pathObj.name.replace(/\.h-[a-fA-F0-9]+\b/g, '').replace(/\.min/g, '');
    return `${pathObj.dir}/${normalizedName}${pathObj.ext}`;
};

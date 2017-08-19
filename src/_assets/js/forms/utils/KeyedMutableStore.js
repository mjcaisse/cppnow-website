const _uniqueId = require('lodash/uniqueId');

const store = {};

const create = (mutable) => {
    const key = _uniqueId('mutable_');
    store[key] = mutable;
    return key;
};

const getAt = (key) => {
    return store[key];
};

const setAt = (key, mutable) => {
    if (mutable !== store[key]) {
        store[key] = mutable;
    }
    return mutable;
};

module.exports = {
    create: create,
    getAt: getAt,
    setAt: setAt,
};

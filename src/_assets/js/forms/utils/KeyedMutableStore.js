const _uniqueId = require('lodash/uniqueId');

const store = {};

const create = (mutable) => {
    const key = _uniqueId('mutable_');
    store[key] = {
        value: mutable,
        setCount: 0,
    };
    return {
        key: key,
        setCount: 0,
    };
};

const getAt = (key) => {
    return store[key].value;
};

const setAt = (key, mutable) => {
    if (mutable !== store[key].value) {
        store[key].value = mutable;
        store[key].setCount += 1;
    }

    // Return a differing number for every legit set, so we know to update the UI
    return store[key].setCount;
};

module.exports = {
    create: create,
    getAt: getAt,
    setAt: setAt,
};

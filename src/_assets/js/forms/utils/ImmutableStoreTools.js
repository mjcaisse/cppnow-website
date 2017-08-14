const _each = require('lodash/each');
const _get = require('lodash/get');
const _indexOf = require('lodash/indexOf');
const _isString = require('lodash/isString');
const _reduce = require('lodash/reduce');
const _toPath = require('lodash/toPath');

function trySetIn(store, path, value) {
    return _get(store, path, void 0) === value ? store : store.setIn(_toPath(path), value);
}

const getListenerObject = () => {
    const listeners = [];

    return {
        update: () => {
            _each(listeners, (listener) => {
                listener();
            });
        },
        onChange: (callback) => {
            const index = _indexOf(listeners, callback);
            if (index === -1) {
                listeners.push(callback);
            }
        },
        offChange: (callback) => {
            const index = _indexOf(listeners, callback);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        },
    };
};

const storeSetAt = (store, pathOrPairs, newValue) => {
    // If using this as a path/value pair, modify the store directly immediately
    if (_isString(pathOrPairs)) {
        return trySetIn(store, pathOrPairs, newValue);
    }

    // Otherwise, it's a set of changes
    return _reduce(pathOrPairs, (accumulator, value, path) => {
        return trySetIn(accumulator, path, value);
    }, store);
};

module.exports = {
    getListenerObject: getListenerObject,
    storeSetAt: storeSetAt,
};

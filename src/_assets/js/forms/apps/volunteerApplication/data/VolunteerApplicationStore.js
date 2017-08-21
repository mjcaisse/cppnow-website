const _get = require('lodash/get');
const _isEmpty = require('lodash/isEmpty');
const _some = require('lodash/some');
const emailError = require('utils/emailError');
const im = require('seamless-immutable');
const ImmutableStoreTools = require('utils/ImmutableStoreTools');

const storeSetAt = ImmutableStoreTools.storeSetAt;

let store = im({
    top: {
        person: {
            firstName: '',
            lastName: '',
            email: '',
            errors: {
                firstName: '',
                lastName: '',
                email: '',
            },
        },
        errors: {
            person: '',
        },
    },
});

const listenerObject = ImmutableStoreTools.getListenerObject();

function validatePerson() {
    const person = store.top.person;

    store = storeSetAt(store, `top.person.errors.firstName`, _isEmpty(person.firstName) ? 'Required' : '');
    store = storeSetAt(store, `top.person.errors.lastName`, _isEmpty(person.lastName) ? 'Required' : '');
    store = storeSetAt(store, `top.person.errors.email`, _isEmpty(person.email) ? 'Required' : emailError(person.email));

    return _some(store.top.person.errors);
}

function validate() {
    const personHasErrors = validatePerson();
    store = storeSetAt(store, `top.errors.person`, personHasErrors ? 'Error in Person section' : '');
}

const getAt = (path) => _get(store, path, void 0);
const setAt = (path, value) => {
    const prevStore = store;
    store = storeSetAt(store, path, value);

    if (prevStore !== store) {
        validate();
        listenerObject.update();
    }
};

// Startup
validate();

module.exports = {
    onChange: listenerObject.onChange,
    offChange: listenerObject.offChange,
    getAt: getAt,
    setAt: setAt,
};

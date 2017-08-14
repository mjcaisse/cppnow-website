const _each = require('lodash/each');
const _get = require('lodash/get');
const _isEmpty = require('lodash/isEmpty');
const _some = require('lodash/some');
const _uniqueId = require('lodash/uniqueId');
const emailError = require('utils/emailError');
const im = require('seamless-immutable');
const ImmutableStoreTools = require('utils/ImmutableStoreTools');

const storeSetAt = ImmutableStoreTools.storeSetAt;

function createNewSpeaker() {
    return {
        id: _uniqueId(),
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        country: void 0,
        bio: '',
        errors: {
            firstName: '',
            lastName: '',
            email: '',
            organization: '',
        },
    };
};

let store = im({
    top: {
        submission: {
            title: '',
            tags: '',
            type: '',
            customType: '',
            description: '',
            minimumLength: 90,
            preferredLength: 90,
            maximumLength: 90,
            sessionLevel: {
                beginner: false,
                intermediate: false,
                advanced: true,
                expert: true,
            },
            audienceDescription: '',
            errors: {
                title: '',
                tags: '',
                type: '',
                customType: '',
                description: '',
                minimumLength: '',
                preferredLength: '',
                maximumLength: '',
                sessionLevel: '',
                audienceDescription: '',
            },
        },
        speakers: {
            list: [
                createNewSpeaker(),
            ],
            errors: {
                list: '',
            },
        },
        toTheProgramCommittee: {
            sessionMaterial: '',
            recordingDistributionPermitted: true,
            outline: '',
            history: '',
            video: '',
            comments: '',
            errors: {
                sessionMaterial: '',
                outline: '',
                history: '',
                video: '',
                comments: '',
            },
        },
        recaptcha: false,
        errors: {
            submission: '',
            speakers: '',
            toTheProgramCommittee: '',
            recaptcha: '',
        },
    },
});

const listenerObject = ImmutableStoreTools.getListenerObject();

function validateLengths(preferredLength, minimumLength, maximumLength) {
    // Ensure we are working with integers
    preferredLength = parseInt(preferredLength, 10) || 0;
    minimumLength = parseInt(minimumLength, 10) || 0;
    maximumLength = parseInt(maximumLength, 10) || 0;

    function isInsideRange(val, min, max) {
        return min <= val && val <= max;
    }

    // A range is defined
    if (minimumLength && maximumLength) {
        let isRangeForward = minimumLength <= maximumLength;

        if (isRangeForward && preferredLength) {
            return [
                isInsideRange(preferredLength, minimumLength, maximumLength) ? '' : 'Must be between the minimum and maximum length',
                '',
                '',
            ];
        }
        if (isRangeForward && !preferredLength) {
            return [
                'Required',
                '',
                '',
            ];
        }
        if (!isRangeForward && preferredLength) {
            return [
                isInsideRange(preferredLength, maximumLength, minimumLength) ? '' : 'Must be between the minimum and maximum length',
                'Must be less than or equal to the maximum length',
                'Must be less than or equal to the minimum length',
            ];
        }
        if (!isRangeForward && !preferredLength) {
            return [
                'Required',
                'Must be less than or equal to the maximum length',
                'Must be less than or equal to the minimum length',
            ];
        }
    }
    // Only the minimum is defined
    else if (minimumLength && !maximumLength) {
        if (!preferredLength) {
            return [
                'Required',
                '',
                'Required',
            ];
        }

        return [
            minimumLength <= preferredLength ? '' : 'Must be greater than or equal to the minimum length',
            '',
            'Required',
        ];
    }
    // Only the maximum is defined
    else if (!minimumLength && maximumLength) {
        if (!preferredLength) {
            return [
                'Required',
                'Required',
                '',
            ];
        }

        return [
            preferredLength <= maximumLength ? '' : 'Must be less than or equal to the maximum length',
            'Required',
            '',
        ];
    }
    // No part of the range defined
    else {
        return [
            preferredLength ? '' : 'Required',
            'Required',
            'Required',
        ];
    }
}

function validateSubmission() {
    store = storeSetAt(store, `top.submission.errors.title`, _isEmpty(store.top.submission.title) ? 'Required' : '');
    store = storeSetAt(store, `top.submission.errors.tags`, _isEmpty(store.top.submission.tags) ? 'Required' : '');
    store = storeSetAt(store, `top.submission.errors.type`, _isEmpty(store.top.submission.type) ? 'Required' : '');
    store = storeSetAt(store, `top.submission.errors.customType`, store.top.submission.type === 'custom' && _isEmpty(store.top.submission.customType) ? 'Required' : '');
    store = storeSetAt(store, `top.submission.errors.description`, _isEmpty(store.top.submission.description) ? 'Required' : '');

    const lengths = validateLengths(store.top.submission.preferredLength, store.top.submission.minimumLength, store.top.submission.maximumLength);
    store = storeSetAt(store, `top.submission.errors.preferredLength`, lengths[0]);
    store = storeSetAt(store, `top.submission.errors.minimumLength`, lengths[1]);
    store = storeSetAt(store, `top.submission.errors.maximumLength`, lengths[2]);

    store = storeSetAt(store, `top.submission.errors.sessionLevel`, !_some(store.top.submission.sessionLevel) ? 'At least one level is required' : '');
    store = storeSetAt(store, `top.submission.errors.audienceDescription`, _isEmpty(store.top.submission.audienceDescription) ? 'Required' : '');

    return _some(store.top.submission.errors);
}

function validateSpeakers() {
    let speakersHaveErrors = false;

    _each(store.top.speakers.list, (speaker, index) => {
        store = storeSetAt(store, `top.speakers.list[${index}].errors.firstName`, _isEmpty(speaker.firstName) ? 'Required' : '');
        store = storeSetAt(store, `top.speakers.list[${index}].errors.lastName`, _isEmpty(speaker.lastName) ? 'Required' : '');
        store = storeSetAt(store, `top.speakers.list[${index}].errors.email`, _isEmpty(speaker.email) ? 'Required' : emailError(speaker.email));
        store = storeSetAt(store, `top.speakers.list[${index}].errors.organization`, _isEmpty(speaker.organization) ? 'Required' : '');
        store = storeSetAt(store, `top.speakers.list[${index}].errors.country`, speaker.country === void 0 ? 'Required' : '');

        speakersHaveErrors = speakersHaveErrors && _some(store.top.speakers.list[index].errors);
    });

    // Sanity check: The UI should never allow this
    store = storeSetAt(store, `top.speakers.errors.list`, _isEmpty(store.top.speakers.list) ? 'Required' : '');
    return speakersHaveErrors && _some(store.top.speakers.errors);
}

function validateToTheProgramCommittee() {
    store = storeSetAt(store, `top.toTheProgramCommittee.errors.sessionMaterial`, _isEmpty(store.top.toTheProgramCommittee.sessionMaterial) ? 'Required' : '');
    store = storeSetAt(store, `top.toTheProgramCommittee.errors.outline`, _isEmpty(store.top.toTheProgramCommittee.outline) ? 'Required' : '');
    store = storeSetAt(store, `top.toTheProgramCommittee.errors.history`, _isEmpty(store.top.toTheProgramCommittee.history) ? 'Required' : '');
    store = storeSetAt(store, `top.toTheProgramCommittee.errors.video`, _isEmpty(store.top.toTheProgramCommittee.video) ? 'Required' : '');
    store = storeSetAt(store, `top.toTheProgramCommittee.errors.comments`, _isEmpty(store.top.toTheProgramCommittee.comments) ? 'Required' : '');

    return _some(store.top.toTheProgramCommittee.errors);
}

function validate() {
    const submissionHasErrors = validateSubmission();
    store = storeSetAt(store, `top.errors.submission`, submissionHasErrors ? 'Error in Submission section' : '');

    const speakersHaveErrors = validateSpeakers();
    store = storeSetAt(store, `top.errors.speakers`, speakersHaveErrors ? 'Error in Speakers section' : '');

    const toTheProgramCommitteeHasErrors = validateToTheProgramCommittee();
    store = storeSetAt(store, `top.errors.toTheProgramCommittee`, toTheProgramCommitteeHasErrors ? 'Error in To the Program Committee section' : '');

    store = storeSetAt(store, `top.errors.recaptcha`, !store.top.recaptcha ? 'Recaptcha required' : '');
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
    createNewSpeaker: createNewSpeaker,
};

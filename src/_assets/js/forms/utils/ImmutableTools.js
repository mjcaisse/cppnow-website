'use strict';

const insertAtFunc = (array, index, value) => array.slice(0, index).concat([value]).concat(array.slice(index));
const removeAtFunc = (array, index) => array.slice(0, index).concat(array.slice(index + 1));

const push = (array, value) => array.concat([value]);
const move = (array, fromIndex, toIndex) => {
    // Move to same location, ignore
    // Move from non-existant location, ignore
    if (fromIndex === toIndex || fromIndex >= array.length) {
        return array;
    }

    const movedValue = array[fromIndex];
    return insertAtFunc(removeAtFunc(array, fromIndex), toIndex, movedValue);
};

module.exports = {
    push: push,
    insertAt: insertAtFunc,
    removeAt: removeAtFunc,
    move: move,
};

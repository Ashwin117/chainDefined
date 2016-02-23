'use strict';

module.exports = function (rootObject, objectChainArray) {
    if (!objectChainArray) {
        objectChainArray = [];
    }
    if (!(objectChainArray instanceof Array)) {
        return false;
    }

    var value = objectChainArray.reduce(function (previous, current) {
        if (!previous || !previous[current]) {
            return;
        }
        return previous[current];
    }, rootObject);

    return !!value;
};

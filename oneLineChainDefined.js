'use strict';

module.exports = function (rootObject, objectChainArray) {
    return (objectChainArray && !(objectChainArray instanceof Array)) ? false : !!(objectChainArray || []).reduce(function (previous, current) { return (!previous || !previous[current]) ? null : previous[current] }, rootObject);
};

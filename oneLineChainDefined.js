// This is the exact same functionality as index.js but I've simply condensed everything to one line...for fun. Please don't be upset!

'use strict';

module.exports = function (rootObject, objectChainArray) {
    return (objectChainArray && !(objectChainArray instanceof Array)) ? false : !!(objectChainArray || []).reduce(function (previous, current) { return (!previous || !previous[current]) ? null : previous[current] }, rootObject);
};

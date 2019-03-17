"use strict";
function isInArray(array) {
    var needles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        needles[_i - 1] = arguments[_i];
    }
    if (!Array.isArray(array)) {
        throw new Error('First argument should be array');
    }
    var argsCount = needles.length;
    for (var i = 0; i < argsCount; i++) {
        var needle = needles[i];
        if (array.indexOf(needle) === -1) {
            return false;
        }
    }
    return true;
}
isInArray([5, 9, 'fd', '*', 5, 'fd', '*']);

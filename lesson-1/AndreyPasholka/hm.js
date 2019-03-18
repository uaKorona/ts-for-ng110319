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
/**
 * Написать функцию summator(), которая суммирует переданые ей аргументы.
 * Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 * @param args
 * @returns {number}
 */
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            sum += Number(args[i]);
        }
    }
    return sum;
}
summator(5, 9, '5');

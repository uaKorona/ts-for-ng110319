/*в задании не уточняются типы элемента, поэтому допустила в учебных примерах использование any*/
function isInArray(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!args.length)
        return false;
    return args.every(function (item) { return a.indexOf(item) !== -1; });
}
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var strIncluded = args.some(function (item) { return typeof item === 'string'; });
    function _sum(a) {
        return a.reduce(function (sum, item) { return sum + item; });
    }
    return (strIncluded) ? _sum(args.map(function (item) { return item.toString(); })) : _sum(args);
}
console.log(summator(1, 2, 3));
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var arr = [];
    args.forEach(function (item) {
        if (arr.indexOf(item) === -1)
            arr.push(item);
    });
    return arr;
}
function toMatrix(data, rowSize) {
    var result = [];
    var i = 1;
    var _arr = [];
    data.forEach(function (item) {
        _arr.push(item);
        if (i === rowSize) {
            result.push(_arr);
            i = 1;
            _arr = [];
        }
        else {
            i++;
        }
    });
    if (_arr.length)
        result.push(_arr);
    return result;
}

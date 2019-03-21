// 1 Task
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
function isInArray(argument1) {
    var argument2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        argument2[_i - 1] = arguments[_i];
    }
    if (argument1 && argument1.length && argument2 && argument2.length) {
        return !argument2.some(function (arg) {
            return argument1.indexOf(arg) == -1;
        });
    }
    return false;
}
console.log("isInArray([1, 2, 3], 1, 2, 3)", isInArray([1, 2, 3], 1, 2, 3)); // true
console.log("isInArray([1, 2, 3], 1, 9, 3)", isInArray([1, 2, 3], 1, 9, 3)); // false
console.log("isInArray([1, 2, 3], 1, 9, 3, 4)", isInArray([1, 2, 3, 4], 1, 9, 3, 4)); // false
// Task 2
// Написать функцию summator(), которая суммирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.map(function (arg) {
        if (typeof arg === "string") {
            return parseInt(arg);
        }
        return arg;
    }).reduce(function (sum, arg) {
        return sum + arg;
    });
}
console.log("summator(1, '2', 3)", summator(1, '2', 3));
// Task 3
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (arg, index) {
        return args.indexOf(arg) == index;
    });
}
console.log('getUnique(1,1,2,3,4,4,"abc","a","b","abc")', getUnique(1, 1, 2, 3, 4, 4, 'abc', "a", "b", "abc"));
// Task 4
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
// возвращает новый массив. Число показывает количество элементов в подмассивах,
// элементы подмассивов беруться из массива data.
// Оригинальный массив не должен быть изменен.
function toMatrix(data, rowSize) {
    return data.map(function (el) {
        if (el.length <= rowSize) {
            return el;
        }
        return el.slice(0, rowSize);
    });
}
console.log("toMatrix([[1, 2, 3, 4, 5], [1], [1, 2, 3]]", toMatrix([[1, 2, 3, 4, 5], [1], [1, 2, 3]], 3));

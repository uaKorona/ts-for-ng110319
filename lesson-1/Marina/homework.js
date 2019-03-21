"use strict";
// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.
function hasArrayAllComponents(arrMain) {
    var arrsCheckedElements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrsCheckedElements[_i - 1] = arguments[_i];
    }
    return arrsCheckedElements.every(function (item) {
        return arrMain.indexOf(item) !== -1;
    });
}
var a = hasArrayAllComponents(['1', true], '1', false);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2)
// Написать функцию summator(), которая суммирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator() {
    var summedItems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        summedItems[_i] = arguments[_i];
    }
    return summedItems.reduce(function (sum, item) {
        return sum + ((typeof item === 'string') ? Number(item) : item);
    }, 0);
}
var b = summator(1, 2, '5');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.
function getUnique() {
    var checkedArguments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        checkedArguments[_i] = arguments[_i];
    }
    return Array.from(new Set(checkedArguments));
    // return checkedArguments.filter((item, index): boolean => {
    //     //     return checkedArguments.indexOf(item) === index;
    //     // });
}
var c = getUnique('asd', 456, a, 'qwe', a);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4)
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//     возвращает новый массив. Число показывает количество элементов в подмассивах,
//     элементы подмассивов беруться из массива data.
//     Оригинальный массив не должен быть изменен.
function toMatrix(data, rowSize) {
    var newMatrix = [];
    var newSubArr = [];
    for (var j = 0; j < data.length; j = j + rowSize) {
        for (var k = 0; ((k < rowSize) && ((k + j) < data.length)); k++) {
            newSubArr.push(data[k + j]);
        }
        newMatrix.push(newSubArr);
        newSubArr = [];
    }
    return newMatrix;
}
var d1 = toMatrix([1, false, 'asd', 1, 456], 2);
var d2 = toMatrix([1, false, 'asd', 1], 2);

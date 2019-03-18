// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
function isInArray(compareArr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var newArr = [];
    if (compareArr.length == values.length) {
        for (var i = 0; i < compareArr.length; i++) {
            var el = compareArr[i];
            for (var y = 0; y < values.length; y++) {
                var elem = values[y];
                if (el === elem) {
                    newArr.push(el);
                }
            }
        }
        if (compareArr.length == newArr.length) {
            console.log(true);
            return true;
        }
        else {
            console.log(false);
            return false;
        }
    }
    else {
        console.log(false);
        return false;
    }
}
isInArray(['test', 2, 3], 'test', 2, 3);
isInArray(['test', 2, 3], 'tes', 2, 3);
isInArray(['test', 2, 3, 5], 'test', 2, 3);
isInArray(['test', 2, 3, 5], 'test', 2, 3, 5);
isInArray(['test', 2, 3], 'test', 2, 3, 9);
// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var numArr = [];
    for (var i = 0; i < args.length; i++) {
        numArr.push(Number(args[i]));
    }
    var sumArr = numArr.reduce(function (sum, num) { return sum + num; }, 0);
    console.log('sumArr: ' + sumArr);
    return sumArr;
}
// summator(0, '4', '5', -5, '123');
// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var uniqueValuesArr = args.filter(onlyUnique);
    console.log('uniqueValuesArr: ' + uniqueValuesArr);
    return uniqueValuesArr;
}
// getUnique(1, 2, 5, 'casa', 'casa', 23, 2, 3, '4', 'test', 'test', 'Test');
// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.

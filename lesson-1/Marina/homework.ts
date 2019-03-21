// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.
type sb = string | boolean;
function hasArrAllComponents<T>(arrMain: T[], ...arrsCheckedElements: T[]): boolean {
    return arrsCheckedElements.every((item) => {
        return arrMain.indexOf(item) !== -1;
    });
}
// let b = { a: 1 };
// let a: boolean = hasArrAllComponents<string>(['1', true], '1', false);
// console.log(a);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2)
// Написать функцию summator(), которая суммирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...summedItems: (number | string)[]): number | string {

    return summedItems.reduce(function (sum: any, item: any) {
        return sum + item;  // Number.isNaN
    }, 0);
}

let b: number | string = summator(1, 2, 'asd');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.
function getUnique(...checkedArguments: any[]): any[] {
    return checkedArguments.filter(function (item, index) {
        return checkedArguments.indexOf(item) === index;
    });
}

let c: any[] = getUnique(a, 123, 'asd', a, 456);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4)
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//     возвращает новый массив. Число показывает количество элементов в подмассивах,
//     элементы подмассивов беруться из массива data.
//     Оригинальный массив не должен быть изменен.

function toMatrix(data: any[], rowSize: number): any[] {
    const newMatrix = [];
    let newSubArr: any[] = [];
    for (let j: number = 0; j < data.length; j = j + rowSize) {
        for (let k: number = 0; ((k < rowSize) && ((k + j) < data.length)); k++) {
            newSubArr.push(data[k + j]);
        }
        newMatrix.push(newSubArr);
        newSubArr = [];
    }
    return newMatrix;
}

let d1: any[] = toMatrix([1, 123, 'asd', 1, 456], 2);
let d2: any[] = toMatrix([1, 123, 'asd', 1], 2);
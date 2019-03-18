function isInArray(array: Array<any>, ...needles: any[]) {
    if (!Array.isArray(array)) {
        throw new Error('First argument should be array');
    }

    const argsCount = needles.length;
    for (let i = 0; i < argsCount; i++) {
        let needle = needles[i];
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
function summator(...args: (number|string)[]): number {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            sum += Number(args[i]);
        }
    }
    return sum;
}

summator(5,9,'5');


/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 * @param {string | number} args
 * @returns {any}
 */
// function getUnique(...args: any[]):any[] {
//     let length = args.length;
//     let list:any[] = [];
//
//
//     for (let i = 0; i < length; i++) {
//         let value = args[i];
//         let uniqueValue = uniqueList[value];
//         if(value && typeof uniqueValue === 'undefined' &&  typeof uniqueValue !== typeof value) {
//             uniqueList[value] = value;
//         }
//     }
//     //
//     return [];
// }
//
// getUnique(5,9,3,'9','12');
// [3, 5, 7, 9, "12"]

/**
 * Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 * возвращает новый массив. Число показывает количество элементов в подмассивах,
 * элементы подмассивов беруться из массива data.
 * Оригинальный массив не должен быть изменен.
 * (['a', 'b', 'c', 'd'], 3);
 * [['a', 'b', 'c'], ['d']];
 *
 */
interface Interface1 {
    [key:number]: any[];
}

function toMatrix(data:any[], rowSize:number):Interface1 {
    const length:number = data.length;
    let a1:any[] = data.slice(0, rowSize - 1);
    let a2:any[] = data.slice( rowSize, length - 1);
    return [a1, a2];
}

toMatrix([1, 5 , {}, 8, 'dsa', 98, [], 848, null, undefined], 5);
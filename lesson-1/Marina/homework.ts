// Aliases for types.
type aliasSN = string | number;
type aliasSB = string | boolean;
type aliasSNB = string | number | boolean;
type aliasArraySN = aliasSN [];
type aliasArraySNB = aliasSNB [];
type aliasArrayInArraySNB = aliasArraySNB [];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hasArrayAllComponents(arrMain: aliasArraySNB, ...arrCheckedElements: aliasArraySNB): boolean {
    return arrCheckedElements.every((item: aliasSNB): boolean => {
        return arrMain.indexOf(item) !== -1;
    });
}

let a: boolean = hasArrayAllComponents(['1', true], '1', false);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2)
// Написать функцию summator(), которая суммирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function summator(...summedItems: aliasSN []): aliasSN {
    return summedItems.reduce((sum: number, item: aliasSN): number => {
            return sum + ((typeof item === 'string') ? Number(item) : item ) as number;
            }, 0);
}

let b: aliasSN = summator(1, 2, '5');



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getUnique(...checkedArguments:  aliasArraySNB):  aliasArraySNB {
//     return checkedArguments.filter((item, index): boolean => {
//             return checkedArguments.indexOf(item) === index;
//         });
// }
function getUnique(...checkedArguments:  aliasArraySNB):  aliasArraySNB {
    return Array.from(new Set(checkedArguments));
}

let c: aliasArraySNB = getUnique('asd', 456, a, 'qwe', a);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4)
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//     возвращает новый массив. Число показывает количество элементов в подмассивах,
//     элементы подмассивов беруться из массива data.
//     Оригинальный массив не должен быть изменен.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toMatrix(data: aliasArraySNB, rowSize: number): aliasArrayInArraySNB {
    const newMatrix: aliasArrayInArraySNB = [];
    let newSubArr: aliasArraySNB = [];
    for (let j: number = 0; j < data.length; j = j + rowSize) {
        for (let k: number = 0; ((k < rowSize) && ((k + j) < data.length)); k++) {
            newSubArr.push(data[k + j]);
        }
        newMatrix.push(newSubArr);
        newSubArr = [];
    }
    return newMatrix;
}

let d1: aliasArrayInArraySNB = toMatrix([1, false, 'asd', 1, 456], 2);
let d2: aliasArrayInArraySNB = toMatrix([1, false, 'asd', 1], 2);
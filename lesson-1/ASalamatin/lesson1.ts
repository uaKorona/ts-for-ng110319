/*1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.*/

type primitive = string | number | boolean;

function isInArray(arr: primitive[], ...args: primitive[]): boolean {
    for (let i = 0; i < args.length; i++) {
        if (args.length !== arr.length) {
            return false;
        }

        if (!arr.includes(args[i])) {
            return false;
        }
    }
    return true;
}

console.log(isInArray([1, 2, 3], 1, 2, 3));


/*2) Написать функцию summator(), которая суммирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено*/

type sn = string | number;

function summator(...args: sn[]): number {
    return Number(args.reduce((sum, current) => Number(sum) + Number(current)));
}

console.log(summator(1, '2', 3, 4, '5'));


/*3) Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.*/


function getUnique(...args: primitive[]): primitive[] {
    const resultArr: primitive[] = [];

    for (let i = 0; i < args.length; i++) {
        if (!resultArr.includes(args[i])) {
            resultArr.push(args[i]);
        }
    }
    return resultArr;
}

/*4) Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
    возвращает новый массив. Число показывает количество элементов в подмассивах,
    элементы подмассивов беруться из массива data.
    Оригинальный массив не должен быть изменен.*/

type primitiveArr = primitive[];

function toMatrix(arr: primitive[], count: number) {
    const result: primitiveArr[] = [];
    let temp: primitive[] = [];
    let counter: number = 0;
    for (let i = 0; i < arr.length; i++) {
        counter = counter + 1;
        temp.push(arr[i]);
        if (counter / count === 1) {
            result.push(temp);
            counter = 0;
            temp = [];
        }
    }
    result.push(temp);
    return result;
}

console.log(toMatrix(['a', 'b', 'c', 'd'], 3));
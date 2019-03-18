// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray(compareArr: any[], ...values: (number | string)[]) {

    let newArr: Array<any> = [];

    if(compareArr.length == values.length) {
        for (let i = 0; i < compareArr.length; i++) {
            const el = compareArr[i];
            for (let y = 0; y < values.length; y++) {
                const elem = values[y];            
                if(el === elem) {
                    newArr.push(el);
                } 
            }
        }
        if(compareArr.length == newArr.length) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    } else {
        console.log(false);
        return false;
    }
}

isInArray(['test', 2, 3], 'test', 2, 3);
isInArray(['test', 2, 3], 'tes', 2, 3);

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...args: (string | number )[]) {

    let numArr: Array<number> = [];

    for (let i = 0; i < args.length; i++) { 
        numArr.push(Number(args[i]));        
    }

    const sumArr = numArr.reduce((sum, num) => sum + num, 0);
    console.log('sumArr: ' + sumArr);
    return sumArr;
}
summator(0, '4', '5', -5, '123');

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

function getUnique(...args: any[]) {

    function onlyUnique(value: any, index: number, self: any) { 
        return self.indexOf(value) === index;
    }

    let uniqueValuesArr = args.filter(onlyUnique);

    console.log('uniqueValuesArr: ' + uniqueValuesArr);
    return uniqueValuesArr;
}
getUnique(1, 2, 5, 'casa', 'casa', 23, 2, 3, '4', 'test', 'test', 'Test');

// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.


// Я не понимаю это задание
function toMatrix(data: any[], rowSize: number) {
    let newArr: Array<any> = [];

    return newArr;
}

toMatrix([[1, 2, 3], [3, 5, 8], ['test']], 7);


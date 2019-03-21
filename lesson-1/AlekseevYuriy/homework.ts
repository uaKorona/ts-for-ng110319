/*1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/
type sn = string | number;
type snb = sn | boolean;
function isInArray(array: snb[], ...args: snb[]): boolean {
  return args.every((v: snb) => array.indexOf(v) > -1);
}


let result1 = isInArray([2, 3, 14, 5], 2, '14', 1);

console.log('task1 result: ' + result1);
/*
2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
*/

function summator(...args: sn[]): number {
  return args.reduce<number>((prev: number, curr: sn): number => {
    return (Number(prev) || 0) + (Number(curr) || 0);
  }, 0);
}

let result2 = summator(2, '50', 300);
console.log('task2 result: ' + result2);
/*
3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/

function getUnique(...args: snb[]): snb[] {
  const resultArray: snb[] = [];
  args.forEach((item: snb) => {
    if (!isInArray(resultArray, item)) {
      resultArray.push(item);
    }
  });
  return resultArray;
}

let result3 = getUnique(5, 5, 12, 3, 1, 6, 6, 7, 2, 2);
console.log('task3 result: ' + result3);

/*
4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
*/

function toMatrix(data: number[], rowSize: number): number[][] {
  const resultArray: number[][] = [[]];
  let currRowSize: number = 0;
  let currRow: number = 0;

  data.forEach(function (item: number) {

    if (!resultArray[currRow]) {
      resultArray[currRow] = new Array(rowSize);
    }

    resultArray[currRow].push(item);
    currRowSize++;

    if (currRowSize > rowSize - 1) {
      currRowSize = 0;
      currRow++;
    }
  });
  return resultArray;
}

let result4 = toMatrix([2, 3, 5, 6, 7, 7, 8, 8, 9, 9, 9, 9, 12, 11, -1, 13, 5], 4);
console.log(result4);
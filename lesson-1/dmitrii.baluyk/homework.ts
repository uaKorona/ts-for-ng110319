/*
  1)
    Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.

  2)
    Написать функцию summator(), которая суммирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

  3)
    Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.

  4)
    Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
    возвращает новый массив. Число показывает количество элементов в подмассивах,
    элементы подмассивов беруться из массива data.
    Оригинальный массив не должен быть изменен.
*/

// 1
function isInArray<T>(arr: T[], ...args: unknown[]): boolean {
  if (JSON.stringify(arr) === JSON.stringify(args)) return true
  return false
}

console.log(isInArray([1, 2, 3], 1, 2, '3')); // false

// 2
function summator(...args: (number | string)[]): number {
  return +args.reduce((accum, val) => +accum + +val)
}

console.log(summator(1, 2, 3, 4)); // 10

// 3
function getUnique<T, Y>(...args: (T | Y)[]): (T | Y)[] {
  let resultArray: (T | Y)[] = [];
  // !!! Вопрос: checkObject не смог задать тип Object, отказываеться преобразовать '(T | Y)' в ключи
  let checkObject: any = {};

  args.forEach((e => {
    if (checkObject.hasOwnProperty(e)) return
    checkObject[e] = true;
    resultArray.push(e);
  }));

  return resultArray
}

console.log(getUnique(1, 2, 2, 'a', 'a', 'a', 'a', 3, 4)); // [1,2,'a',3,4]

// 4
function toMatrix<T>(data: T[][], rowSize: number): T[][] {
  let resultArray: T[][] = [];

  resultArray = data.map((e) => {
    if (e.length > rowSize) e.length = rowSize
    return e
  });
  return resultArray
}

console.log(toMatrix([[1, 2, 3], [1], [1, 2, 3, 4, 5, 6, 7]], 2)) // [[1,2],[1],[1,2]]

// fix TS2393 https://github.com/holochain/hc-ts-template/issues/2#issuecomment-417435004
export = 0;
// type User = {
//   firstName: string,
//   age: number;
// }
// let accounts: { [id: string]: User } = {
//   '091823123asdasd123': {
//     firstName: 'Igor',
//     age: 33
//   }
// }
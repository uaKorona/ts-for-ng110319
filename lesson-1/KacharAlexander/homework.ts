/* Функция 1

Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
Возвращает true, если все аргументы, кроме первого входят в первый.
Первым всегда должен быть массив.
*/

type sn = string | number;
type snb = sn | boolean;

function isInArray(arr: snb[], ...args: snb[]): boolean {
  return args.every((i: snb) => arr.indexOf(i) > -1);
}

console.log('** function 1 **');
console.log(isInArray([1, 2, 3], 1, 2, 3, 4));
console.log(isInArray([1, '2', 3], 1, '2'));
console.log(isInArray([1, 2, 3], 1, 2, 3));

/* Функция 2

 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

function summator(...args: sn[]): number {
  return Number(args.reduce((sum, current) => Number(sum) + Number(current)));
}


console.log('** function 2 **');
console.log(summator(1, 2, 3));
console.log(summator(6, '8', 6));


/* Функция 3
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/

function getUnique(...args: snb[]): snb[] {
  const results: snb[] = [];

  args.forEach((item) => {
    if (!isInArray(results, item)) {
      results.push(item);
    }
  });

  return results;
}

console.log('** function 3 **');
console.log(getUnique(1, 1, 3, 3, 6, 7, 7, 7, 2, 2));


/* Функция 4
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
*/

function toMatrix(arr: sn[], rowSize: number): sn[][] {
  const results = [];

  while (arr.length) {
    results.push(arr.splice(0, rowSize));
  }

  return results;
}

console.log('** function 4 **');
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(toMatrix([1, 123, 1, 456], 2));
// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
function isInArray<T>(array: T[] = [], ...args: T[]): boolean {
  return args.every(el => array.includes(el));
}

console.log(isInArray<number>([1, 3], 1, 3));

// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator(...args: (number | string)[]): number {
  return args.reduce((acc, value) => +acc + +value) as number;
}

console.log(summator(1, '2', '3'));

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.
function getUnique(...arr: unknown[]) {
  return [...new Set(arr)];
}

console.log(getUnique(1, '2', 1, 6, 4, 2, '2', 1));

// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.
function toMatrix<T>(data: T[], rowSize: number = 1): T[][] {
  const length = Math.ceil(data.length / rowSize);

  return Array(length)
    .fill(0)
    .map((_v, i) => data.slice(i * rowSize, i * rowSize + rowSize));
}

console.log(toMatrix<number>([1, 2, 3, 4, 5, 6, 7], 2));


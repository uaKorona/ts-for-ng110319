// firstLesson.ts
// learn.javascript.ru
// Anton Elistratov - 03/18/2019

// task 1
function isInArray(arr: number[], ...args: number[]): boolean {
  return arr.length === args.length && arr.every((el, i) => el === args[i] );
}

// task 1 run example
console.log('task 1');
console.log('Run: isInArray([1, 2, 3], 1, 2 , 3)');
console.log(isInArray([1, 2, 3], 1, 2 , 3));
console.log('Run: isInArray([1, 2, 3], 1, 2 , 3, 4)');
console.log(isInArray([1, 2, 3], 1, 2 , 3, 4));
console.log('Run: isInArray([1, 2, 3], 1, 2 , 4)');
console.log(isInArray([1, 2, 3], 1, 2 , 4));

// task2
function summator(...args: (string | number)[]): number {
  let sum: number = 0;
  for ( const i in args ) { sum += Number(args[i]); }
  return sum;
}

// task 2 run
console.log('task 2');
console.log('Run: summator(1, 2, 3)');
console.log(summator(1, 2, 3));
console.log('Run: summator(1, 2, \'3\')');
console.log(summator(1, 2, '3'));
console.log('Run: summator(\'1\', \'2\', \'3\')');
console.log(summator('1', '2', '3'));

// ЗАПУСКАТЬ С ФЛАГОМ --target ES6
// task 3
function getUnique(arr: number[]): number[] {
  return [...new Set(arr)];
}

console.log('task 3');
console.log('Run: getUnique([1, 2, 3, 4, 5, 6, 7, 8])');
console.log(getUnique([1, 2, 3, 4, 5, 6, 7, 8]));
console.log('Run: getUnique([8, 2, 1, 1, 5, 6, 5, 7, 8])');
console.log(getUnique([8, 2, 1, 1, 5, 6, 5, 7, 8]));

// task 4
function toMatrix (data: string[], rowSize: number): string[] | string[][] {
  let miniArray: string[] = [];
  const mainArray: string[][]  = [];
  let counter: number = 0;

  // если rowSize больше, то вернутся исходные данные
  if (rowSize >= data.length) {
    return data;
  }

  for (let i: number = 0; i < data.length; i++) {
    counter++;
    miniArray.push(data[i]);

    // тригается каждые @rowSize элементов или на остаток массива
    if (counter === rowSize || data.length -	1 === i) {
      mainArray.push(miniArray);
      miniArray = [];
      counter = 0;
    }
  }
  // можно что угодно возвращать, ради прикола массив в массиве
  return mainArray;
}

// task 4 run
console.log('task 4');
console.log('Run: toMatrix([\'I\', \'am\', \'afraid\', \'of\', \'CSS\'], 2)');
console.log(toMatrix(['I', 'am', 'afraid', 'of', 'CSS'], 2));
console.log('Run: toMatrix([\'I\', \'am\', \'afraid\', \'of\', \'CSS\'], 1)');
console.log(toMatrix(['I', 'am', 'afraid', 'of', 'CSS'], 1));
console.log('Run: toMatrix([\'I\', \'am\', \'afraid\', \'of\', \'CSS\'], 8)');
console.log(toMatrix(['I', 'am', 'afraid', 'of', 'CSS'], 8));

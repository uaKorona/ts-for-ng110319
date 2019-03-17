/*в задании не уточняются типы элементов, поэтому допустила в учебных примерах использование any*/

function isInArray(a: any[], ...args: any[]): boolean {
  if (!args.length) return false;
  return args.every(item => a.indexOf(item) !== -1);
}

function summator(...args: (number | string)[]){
  const strIncluded = args.some(item => typeof item === 'string');

  function _sum<T>(a: T[]): T {
      return a.reduce((sum, item) => sum + item);
  }

  return (strIncluded) ?  _sum<string>(args.map(item => item.toString())) : _sum<number>(args);
}


function getUnique(...args: any[]) {
  let arr: any[] = [];
  args.forEach(item => {
    if (arr.indexOf(item) === -1) arr.push(item);
  });
  return arr;
}

function toMatrix(data: any[], rowSize: number) {
  let result: any[] = [];
  let i: number = 1;
  let _arr: any[] = [];

  data.forEach(item => {
    _arr.push(item);
    if (i === rowSize) {
      result.push(_arr);
      i = 1;
      _arr = [];
    } else {
      i++;
    }
  });
  if (_arr.length) result.push(_arr);
  return result;
}
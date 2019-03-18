/*в задании не уточняются типы элементов, поэтому допустила в учебных примерах использование any*/

function isInArray(a: any[], ...args: any[]): boolean {
  if (!args.length) {
    return false;
  }
  return args.every((item: any) => a.indexOf(item) !== -1);
}

function summator(...args: (number | string)[]){
  const strIncluded = args.some(item => typeof item === 'string');

  function _sum(a: any[]): number | string {
    let arr;
    let initialVal;
    if (strIncluded) {
      arr = a.map(item => item.toString());
      initialVal = '';
    } else {
      arr = a.map(item => Number(item));
      initialVal = 0;
    }
    return arr.reduce((result, item) => result + item, initialVal);
  }
  return _sum(args);
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
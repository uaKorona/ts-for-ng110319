function toMatrix<T>(data: T[][], rowSize: number): T[][] {
  let resultArray: T[][] = [];

  resultArray = data.map((e) => {
    if (e.length > rowSize) e.length = rowSize
    return e
  });
  return resultArray
}

console.log(toMatrix([[1, 2, 3], [1], [1, 2, 3, 4, 5, 6, 7]], 2)) // [[1,2],[1],[1,2]]

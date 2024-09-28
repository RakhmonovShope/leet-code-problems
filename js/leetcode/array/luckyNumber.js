const luckyNumber = (matrix) => {
  const hash = new Map();
  const maxNumbers = [];


  for (let i = 0; i < matrix.length; i++) {
    const min = Math.min(...matrix[i]);
    const minIndex = matrix[i].indexOf(min);
    hash.set(min, minIndex);
  }


  for ([value, key] of hash.entries()) {
    const arr = [];

    for (let i = 0; i < matrix.length; i++) {
      arr.push(matrix[i][key]);
    }

    if (arr.every(item => item <= value)) {
      maxNumbers.push(value);
    }
  }


  return maxNumbers;
}


console.log(luckyNumber([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
console.log(luckyNumber([[3, 7, 8], [9, 11, 13], [15, 16, 17]]));
console.log(luckyNumber([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
console.log(luckyNumber([[7, 8], [1, 2]]));


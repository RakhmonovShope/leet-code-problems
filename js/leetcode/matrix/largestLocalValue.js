var largestLocal = function (grid) {
  const arr = [];

  const getMaxValue = (stepI, stepJ) => {
    let max = grid[0 + stepI][0 + stepJ];

    for (let i = stepI; i < 3 + stepI; i++) {
      for (let j = stepJ; j < 3 + stepJ; j++) {
        if (grid[i][j] > max) {
          max = grid[i][j];
        }
      }
    }

    return max;
  };

  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid.length - 2; j++) {
      arr[i] ? arr[i].push(getMaxValue(i, j)) : (arr[i] = [getMaxValue(i, j)]);
    }
  }

  return arr;
};

const grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

// const grid = [
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 2, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
// ];

console.log(largestLocal(grid));

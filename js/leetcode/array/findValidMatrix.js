var restoreMatrix = function (rowSum, colSum) {
  const rows = rowSum.length;
  const cols = colSum.length;

  // Initialize the matrix with zeros
  const matrix = Array.from({length: rows}, () => Array(cols).fill(0));

  // Fill the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // The value to be assigned is the minimum of rowSum[i] and colSum[j]
      const value = Math.min(rowSum[i], colSum[j]);
      matrix[i][j] = value;

      // Update rowSum and colSum
      rowSum[i] -= value;
      colSum[j] -= value;
    }
  }

  return matrix;
};


rowSum = [5, 7];
colSum = [8, 6];
// const result =
//   [[0, 5, 0],
//     [6, 1, 0],
//     [2, 0, 8]];

console.log(restoreMatrix(rowSum, colSum));

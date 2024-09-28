/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimetr = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (!grid[i][j - 1]) {
          perimetr++;
        } else if (!grid[i][j - 1]) {
          perimetr++;
        }
        if (!grid[i][j + 1]) {
          perimetr++;
        } else if (!grid[i][j + 1]) {
          perimetr++;
        }
        if (grid[i - 1]) {
          if (!grid[i - 1][j]) {
            perimetr++;
          }
        } else if (!grid[i - 1]) {
          perimetr++
        }
        if (grid[i + 1]) {
          if (!grid[i + 1][j]) {
            perimetr++;
          }
        } else if (!grid[i + 1]) {
          perimetr++;
        }
      }
    }
  }

  return perimetr;
};

const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
console.log(islandPerimeter(grid))
console.log(islandPerimeter([[1]]))
console.log(islandPerimeter([[1, 0]]))
console.log(islandPerimeter([[1, 1]]))

var queryResults = function (limit, queries) {
  const result = [];

  const hashBall = new Map();

  const hashColor = new Map();

  for (let [ball, color] of queries) {
    hashBall.set(ball, color);
  }

  console.log('hashBall', hashBall);
  console.log('hashColor', hashColor.values());

  return result;
};

const limit = 4;
const queries = [
  [0, 1],
  [1, 4],
  [1, 1],
  [1, 4],
  [1, 1],
];

console.log(queryResults(limit, queries));

var longestDiverseString = function (a, b, c) {
  let s = '';

  for (let i = 1; i <= a + b + c; i++) {
    if ((a > b || a > c) && i % 3 !== 0 && a !== 0) {
      s += 'a';
      a--;
    } else if ((c > b || c > a) && i % 3 !== 0 && c !== 0) {
      s += 'c';
      c--;
    } else if ((b > a || b > c) && i % 3 !== 0 && b !== 0) {
      s += 'b';
      b--;
    }
  }

  return s;
};

const a = 7,
  b = 1,
  c = 0;

console.log(longestDiverseString(a, b, c));

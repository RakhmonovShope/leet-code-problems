const arrangingCoins = (n) => {
  if (n === 0) return 0;
  if (n <= 2) {
    return 1;
  } else if (n < 4) return 2;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (i > n - sum) {
      return i - 1;
    } else {
      sum += i;
    }
  }
};

const n = 2;

console.log(arrangingCoins(n));

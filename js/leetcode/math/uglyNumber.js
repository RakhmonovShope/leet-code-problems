var isUgly = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;

  let fraction = n;

  while (fraction !== 1) {
    if (fraction % 2 === 0) {
      fraction = fraction / 2;
    } else if (fraction % 3 === 0) {
      fraction = fraction / 3;
    } else if (fraction % 5 === 0) {
      fraction = fraction / 5;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isUgly(15)); // true

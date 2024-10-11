var addDigits = function (num) {
  if (num < 10) return num;
  let ss = num;

  while (String(ss).length !== 1) {
    let sum = 0;

    while (ss !== 0) {
      sum = sum + Math.floor(ss % 10);
      ss = Math.floor(ss / 10);
    }

    ss = sum;
  }

  return ss;
};

console.log(addDigits(16));

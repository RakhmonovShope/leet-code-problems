var addDigits = function (num) {
  if (num < 10) return num;
  let increment = 1;

  while (String(num).length !== 1) {
    let sum = 0;
    let ss = num;

    while (ss !== 0) {
      sum = sum + Math.floor(ss % 10);
      ss /= 10;

      console.log('increment =>', increment);
      increment++;
    }

    num = sum;
  }

  return num;
};

console.log(addDigits(16));

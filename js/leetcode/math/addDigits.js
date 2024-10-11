var addDigits = function (num) {
  if (num % 9 === 0) return 9;

  return num % 9;
};

console.log(addDigits(2321));

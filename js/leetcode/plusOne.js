var plusOne = function (digits) {
  let newNumbers = BigInt(digits.join('')) + BigInt(1);
  
  return String(newNumbers).split('')
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])




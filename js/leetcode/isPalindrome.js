var isPalindrome = function (x) {

  if (x < 0) return false;
  
  console.log(x.split(''))
  const stringifiedNumber = String(x);

  for (let i = 0; i < stringifiedNumber.length / 2; i++) {
    if (stringifiedNumber[i] !== stringifiedNumber[stringifiedNumber.length - 1 - i]) {
      return false;
    }
  }

  return true;
};


console.log((isPalindrome(String(223))))

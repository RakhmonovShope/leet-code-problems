const isPalindromeNumber = (num) => {
  if (num < 0) return false;

  let copyNum = num;
  let newNum = '';

  while (copyNum > 0) {
    const a = Math.floor(copyNum % 10);
    newNum += String(a);
    copyNum = Math.floor(copyNum / 10);
  }

  console.log(num, newNum)
  return Number(newNum) === num;
}


console.log(isPalindromeNumber(121))

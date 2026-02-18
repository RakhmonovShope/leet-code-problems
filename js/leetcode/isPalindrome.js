const isPalindrome = (n) => {
  // code here
  let num = 0;
  let old = n;

  while (old > 0) {
    // 555 -> num = 0 + 5 = 5 --- old = 55
    // 55 -> num = 5*10 + 5 = 55 --- old = 5
    // 5 -> num = 55*10 + 5 = 555 --- old = 5
    num = num * 10 + (old % 10);
    console.log('num', num);
    old = Math.floor(old / 10);
  }

  // console.log('num', num);

  return num === n;
};

console.log(isPalindrome(String(555)));

const gcdOfStrings = (str1, str2) => {
  if (str1[0] !== str2[0]) return '';
  let divisor = str1[0];

  for (let i = 1; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] === str2[i]) {


      divisor += str1[i];
    }
  }

  return divisor;
}

console.log(gcdOfStrings('ABCABC', 'ABC'));
console.log(gcdOfStrings('LEET', 'CODE'));
console.log(gcdOfStrings('ABABAB', 'AB'));

console.log(gcdOfStrings('ABADABAD', 'ABAD'));


function closure(num1, arr) {
  let sum1 = num1 + arr.reduce((prev, curr) => prev + curr, 0);


  return (num2) => {
    sum1 += num2;

    return (arr2) => {
      return sum1 += arr2.reduce((prev, curr) => prev + curr, 0);
    }
  }
}

console.log(closure(5, [1, 2])(2)([1, 2]));

(() => {
  console.log('Hdasds');
})();

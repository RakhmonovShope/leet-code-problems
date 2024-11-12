// const romanToInteger = (s) => {
//   let sum = 0;
//   const values = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//
//   for (let i = 0; i < s.length; i++) {
//     const curr = s[i];
//     const next = s[i + 1];
//
//     if (values[curr] > values[next]) {
//       sum += values[curr];
//     } else {
//       sum += values[curr] - values[next];
//       i++;
//     }
//   }
//
//   return sum;
// };

const romanToInteger = (s) => {
  const defValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const hash = new Map(Object.entries(defValue));
  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const num = hash.get(s[i]);
    const preNum = hash.get(s[i - 1]);

    if (num > preNum) {
      sum += num - preNum;
      i--;
    } else {
      sum += num;
    }
  }

  return sum;
};

const romanNumerals = 'MCMXCIV';

console.log(romanToInteger(romanNumerals));

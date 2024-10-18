// 1 - solution
// const numberOf1Bits = (n) => {
//   const binaryString = n.toString(2);
//   let count = 0;
//   let i = 0;
//
//   while (i < binaryString.length) {
//     if (binaryString[i] === '1') count++;
//
//     i++;
//   }
//
//   return count;
// };

// 2 - solution

const numberOf1Bits = (n) => {
  let count = 0;

  while (n) {
    count += n & 1;

    n = n >> 1;
  }

  return count;
};

const t = 11;

console.log(numberOf1Bits(t));

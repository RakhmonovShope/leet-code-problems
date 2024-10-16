// const powerOfFour = (n) => {
//
//   if (n === 1) return true;
//   if (n < 4 && n !== 1) return false;
//
//   const check = (n, power) => {
//     if (n % 4 === 0) {
//       return check(n / 4, ++power)
//     } else if (n === 1 && power > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return check(n, 0);
// }

const checkPower = (n) => {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 4 !== 0) return false;

  return checkPower(n / 4);
};

console.log(checkPower(256));

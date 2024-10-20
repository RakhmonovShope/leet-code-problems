// 3 - solution

// const validPerfectSquare = (num) => {
//   const isOdd = num % 2 !== 0;
//
//   for (let i = isOdd ? 1 : 2; i <= Math.round(num / 2); i += 2) {
//     if (i * i === num) return true;
//   }
//
//   return false;
// };

// 4 - solution

const validPerfectSquare = (num) => {
  let mid = Math.round(num / 2),
    min = 1,
    max = num;

  while (max >= min) {
    mid = Math.floor((max + min) / 2);

    if (Math.pow(mid, 2) === num) return true;

    if (Math.pow(mid, 2) < num) {
      min = mid + 1;
    } else max = mid - 1;
  }

  return false;
};

console.log(validPerfectSquare(16));

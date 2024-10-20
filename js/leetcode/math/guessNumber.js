// 1- solution

var guess = function (num, target) {
  if (num === target) {
    return 0;
  } else if (num > target) {
    return -1;
  } else if (num < target) return 1;
};

// const guessNumber = (n) => {
//   let mid = Math.floor(n / 2),
//     high = n,
//     low = 1;
//
//   while (high >= low) {
//     if (guess(mid) === 0) {
//       return mid;
//     } else if (guess(mid) === 1) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//
//     mid = Math.floor((high + low) / 2);
//   }
// };

// 2 - solution

const guessNumber = (n) => {
  for (let i = 0; i <= n; i++) {
    if (guess(i) === 0) return i;
  }
};

console.log(guessNumber(2983));

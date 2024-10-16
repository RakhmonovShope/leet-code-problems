// 1 - solution

// var countBits = function (n) {
//   const arr = [];
//
//   for (let i = 0; i <= n; i++) {
//     let countOfOne = 0;
//     let bit = i.toString(2);
//
//     for (let char of bit) {
//       if (char === '1') countOfOne++;
//     }
//
//     arr.push(countOfOne);
//   }
//
//   return arr;
// };

// 2 - solution

var countBits = function (n) {
  const arr = [0];

  for (let i = 1; i <= n; i++) {
    arr[i] = arr[i >> 1] + (i & 1);
  }

  return arr;
};

console.log(JSON.stringify(countBits(85723)));

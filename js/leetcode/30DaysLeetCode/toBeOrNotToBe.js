// var expect = function (val) {
//   const newValue = String(val);
//
//   const operation = newValue.includes('toBe') ? '===' : '!=='
//   const firstValue = newValue.slice(newValue.indexOf('('), newValue.indexOf(')'));
//   const secondValue = newValue.slice(newValue.lastIndexOf('('), newValue.lastIndexOf(')'));
//
//   if (operation === '===') {
//     if (firstValue === secondValue) {
//       return {'value': true};
//     }
//     return {'error': 'Not Equal'};
//
//   } else {
//     if (firstValue !== secondValue) {
//       return {'value': true};
//     }
//
//     return {'error': 'Not Equal'};
//   }
//
// };
//
//
// console.log(expect('() => expect(5).toBe(5)'))


// async function sleep(millis) {
//   return new Promise(resolve => setTimeout(resolve, millis))
// }
//
// let t = Date.now();
//
// sleep(100).then(() => console.log(Date.now() - t))

var reduce = function (nums, fn, init) {
  const n = nums.length;

  if (n === 0) return init;
  let sum = init;

  for (let i = 0; i < n; i++) {
    sum = fn(sum, nums[i]);
  }

  return sum;
};


console.log('sum', reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0));


console.log(typeof 1 === "object")

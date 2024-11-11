// const productOfArrayExceptSelf = (nums) => {
//   let arrays = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product *= nums[j];
//       }
//     }
//
//     if (product == 0) {
//       arrays.push(Math.abs(product));
//     } else {
//       arrays.push(product);
//     }
//   }
//
//   return arrays;
// };

const productOfArrayExceptSelf = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const prevCount = result[result.length - 1];
  }

  console.log(result);
  for (let i = nums.length - 1; i >= 0; i--) {
    const lastEl = result[0] !== undefined ? result[0] : 1;

    const previousEl = nums[i + 1] !== undefined ? nums[i + 1] : 1;

    result[i] = lastEl * previousEl;
  }

  console.log('result', result);
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = prefix[i] * suffix[i];
  // }

  // return nums;
};

// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];

console.log(productOfArrayExceptSelf(nums));

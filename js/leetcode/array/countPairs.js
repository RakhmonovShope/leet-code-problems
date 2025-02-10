// const countPairs = (nums, target) => {
//   let count = 0;
//
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] < target) {
//         count++;
//       }
//     }
//   }
//
//   return count;
// };

const countPairs = (nums, target) => {
  let count = 0;

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};

const nums = [-1, 1, 1, 2, 3];
const target = 2;

console.log(countPairs(nums, target));

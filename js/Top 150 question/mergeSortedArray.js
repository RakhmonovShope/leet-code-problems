// var merge = function (nums1, m, nums2, n) {
//   let k = 0;
//
//   for (let i = m; i < n + m; i++) {
//     nums1[i] = nums2[k];
//     k++;
//   }
//
//   return nums1.sort((a, b) => a - b);
// };
//
// // const nums1 = [1, 2, 3, 0, 0, 0];
// // const nums2 = [2, 5, 6];
//
// // const nums1 = [0];
// // const nums2 = [1];
//
// const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// const nums2 = [1, 2, 2];

// console.log(merge(nums1, 6, nums2, 3));

// var removeElement = function (nums, val) {
//   const items = nums.filter((item) => item !== val);
//
//   const length = nums.length - items.length;
//
//   for (let i = 0; i < items.length; i++) {
//     nums[i] = items[i];
//   }
//
//   for (let i = 0; i < length; i++) {
//     nums.pop();
//   }
//
//   return nums;
// };

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const nums = [3, 2, 2, 3, 5, 6];
const val = 2;

console.log(removeElement(nums, val));

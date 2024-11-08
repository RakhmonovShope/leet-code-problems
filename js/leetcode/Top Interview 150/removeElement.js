/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  const arr = [];

  for (let i of nums) {
    if (i !== val) arr.push(i);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }

  return nums.filter((item) => item !== undefined).length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 2

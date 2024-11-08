/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[j + 1] = nums[i];
      j++;
    }
  }

  for (let i = j + 1; i < nums.length; i++) {
    nums[i] = undefined;
  }

  return nums.filter((item) => item !== undefined).length;
};

var removeDuplicates = function (nums) {
  const hash = new Set(nums);
  const uniqueArr = [...hash];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = uniqueArr[i];
  }

  return hash.size;
};

removeDuplicates([1, 1, 2]);

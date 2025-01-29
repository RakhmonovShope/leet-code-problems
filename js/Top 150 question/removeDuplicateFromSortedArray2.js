var removeDuplicates = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === 1) {
      nums[k++] = nums[i];
    } else {
      nums[k++] = nums[i];
      nums[k++] = nums[i];

      i += map.get(nums[i]) - 1;
    }
  }

  return k;
};

const nums = [1, 1, 1, 1, 4, 4, 6, 6, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9];

console.log(removeDuplicates(nums));

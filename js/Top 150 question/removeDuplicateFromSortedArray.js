var removeDuplicates = function (nums) {
  const set = new Set();
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      nums[k] = nums[i];
      set.add(nums[i]);
      k++;
    }
  }

  return k;
};

const nums = [1, 1, 2];

console.log(removeDuplicates(nums));

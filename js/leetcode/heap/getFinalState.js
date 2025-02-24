var getFinalState = function (nums, k, multiplier) {
  while (k) {
    let minIndex = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < nums[minIndex]) {
        minIndex = i;
      }
    }

    nums[minIndex] = nums[minIndex] * multiplier;
    k--;
  }

  return nums;
};

const nums = [2, 1, 3, 5, 6];
const k = 5;
const multiplier = 2;

console.log(getFinalState(nums, k, multiplier));

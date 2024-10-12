var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j] !== 0) {
        const temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }

  return nums;
};

// const nums = [0, 1, 0, 3, 12];
const nums = [1, 2];

// lastNonZeroIndex = 1 [1, 0, 0, 3, 12] i = 1;
//

console.log(moveZeroes(nums));

var isArraySpecial = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) ||
      (nums[i] % 2 === 1 && nums[i + 1] % 2 === 1)
    ) {
      return false;
      w;
    }
  }

  return true;
};

// const arr = [2, 1, 4];
const arr = [1];

console.log(isArraySpecial(arr));

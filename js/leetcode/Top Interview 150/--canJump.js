var canJump = function (nums) {
  if (nums.length === 1) return true;

  if (nums[0] === 0) return false;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) return true;
    if (nums[i] === 0 && nums[i - 1] === 1) return false;
  }

  return true;
};

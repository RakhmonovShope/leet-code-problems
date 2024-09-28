var maxSubsequence = function (nums, k) {
  
  if (nums.length === k) return nums;

  const arr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {

    if (nums[i - 1] <= nums[i]) {
      if (arr[arr.length - 1] <= nums[i]) {
        arr.push(nums[i]);
      }
    }
  }

  return arr.slice(-k);
};


maxSubsequence([-1, -2, 3, 4], 3);
maxSubsequence([-1, -2, 3, 4], 3);
maxSubsequence([3, 4, 3, 3], 2);

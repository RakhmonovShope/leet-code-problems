var missingNumber = function (nums) {
  const map = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) return i;
  }
};

console.log(missingNumber([0, 2, 3]));

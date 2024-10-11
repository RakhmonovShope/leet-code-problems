var missingNumber = function (nums) {
  // for (let i = 0; i <= nums.length; i++) {
  //   if (!nums.includes(i)) return i;
  // }
  for (let i = 0; i <= nums.length; i++) {
    if (nums.indexOf(i) < 0) return i;
  }
  // const map = new Set(nums);
  //
  // for (let i = 0; i <= nums.length; i++) {
  //   if (!map.has(i)) return i;
  // }
};

console.log(missingNumber([0, 2, 1, 3]));

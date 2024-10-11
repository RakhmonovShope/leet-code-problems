var missingNumber = function (nums) {
  // for (let i = 0; i <= nums.length; i++) {
  //   if (!nums.includes(i)) return i;
  // }
  // for (let i = 0; i <= nums.length; i++) {
  //   if (nums.indexOf(i) < 0) return i;
  // }
  // const map = new Set(nums);
  //
  // for (let i = 0; i <= nums.length; i++) {
  //   if (!map.has(i)) return i;
  // }

  const sum = (nums.length * (nums.length + 1)) / 2;
  const sumExistance = nums.reduce((prev, item) => prev + item, 0);

  return sum - sumExistance;
};

console.log(missingNumber([0, 2, 1, 3]));

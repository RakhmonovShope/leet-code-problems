var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);

  let item = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === item) {
      count++;
    } else {
      item = nums[i];
      count = 1;
    }

    if (count >= Math.round(nums.length / 2)) return item;
  }
};

const nums = [1, 1];

console.log(majorityElement(nums));

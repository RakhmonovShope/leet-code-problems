/**
 * @param {number[]} nums
 * @return {number}
 */

var minimumAverage = function (nums) {
  let average = [];
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  let cycle = nums.length / 2;

  while (cycle !== 0) {
    average.push((nums[left] + nums[right]) / 2);

    left++;
    right--;
    cycle--;
  }

  let min = average[0];

  for (let i = 1; i < average.length; i++) {
    if (average[i] < min) min = average[i];
  }

  return min;
};

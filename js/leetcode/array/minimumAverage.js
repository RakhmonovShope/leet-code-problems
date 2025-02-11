/**
 * @param {number[]} nums
 * @return {number}
 */
//
// var minimumAverage = function (nums) {
//   let average = [];
//   nums.sort((a, b) => a - b);
//
//   let left = 0;
//   let right = nums.length - 1;
//
//   let cycle = nums.length / 2;
//
//   while (cycle !== 0) {
//     average.push((nums[left] + nums[right]) / 2);
//
//     left++;
//     right--;
//     cycle--;
//   }
//
//   let min = average[0];
//
//   for (let i = 1; i < average.length; i++) {
//     if (average[i] < min) min = average[i];
//   }
//
//   return min;
// };

var minimumAverage = function (nums) {
  const average = [];

  let cycle = nums.length / 2;

  while (cycle) {
    let min = nums[0];
    let max = nums[0];
    let maxIndex = 0;
    let minIndex = 0;

    for (let j = 0; j < nums.length; j++) {
      if (min > nums[j]) {
        minIndex = j;
        min = nums[j];
      }

      if (max < nums[j]) {
        maxIndex = j;
        max = nums[j];
      }
    }

    average.push((min + max) / 2);

    nums.splice(minIndex, 1);
    nums.splice(minIndex > maxIndex ? maxIndex : maxIndex - 1, 1);

    cycle--;
  }

  let min = average[0];

  for (let i = 1; i < average.length; i++) {
    if (average[i] < min) min = average[i];
  }

  return min;
};

const nums = [7, 8, 3, 4, 15, 13, 4, 1];

console.log(minimumAverage(nums));

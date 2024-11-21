// const twoSum = (nums, target) => {
//   const numMaps = new Map();
//
//   for (let i = 0; i < nums.length; i++) {
//     const complete = target - nums[i];
//
//     if (numMaps.has(complete)) {
//       return [numMaps.get(complete), i];
//     }
//
//     numMaps.set(nums[i], i);
//   }
// }

const twoSum = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      j--;
    }
  }

  return [];
};

console.log(twoSum([3, 2, 4], 6)); // [0, 1]

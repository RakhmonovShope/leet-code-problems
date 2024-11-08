// const findAllNumbersDisappearedInArray = (nums) => {
//   const arr = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     const index = Math.abs(nums[i]) - 1;
//
//     if (nums[index] > 0) {
//       nums[index] = -nums[index];
//     }
//   }
//
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] > 0) arr.push(j + 1);
//   }
//
//   return arr;
// };

const findAllNumbersDisappearedInArray = (nums) => {
  let count = new Array(nums.length + 1).fill(0);

  for (let i of nums) {
    count[i]++;
  }

  const result = [];

  for (let i = 1; i < count.length; i++) {
    if (!count[i]) result.push(i);
  }

  return result;
};

const nums = [1, 1];
// const nums = [2, 2];

console.log(findAllNumbersDisappearedInArray(nums));

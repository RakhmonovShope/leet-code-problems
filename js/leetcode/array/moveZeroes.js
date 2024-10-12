// 1 - solution

// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (nums[i] === 0 && nums[j] !== 0) {
//         const temp = nums[j];
//         nums[j] = nums[i];
//         nums[i] = temp;
//       }
//     }
//   }
//
//   return nums;
// };

// 2 - solution

// var moveZeroes = function (nums) {
//   const zerosArray = [];
//   const numbersArray = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) zerosArray.push(0);
//     else numbersArray.push(nums[i]);
//   }
//
//   return [...numbersArray, ...zerosArray];
// };

// 3 - solution

var moveZeroes = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  while (count !== nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
};

const nums = [0, 1, 0, 3, 12];
// const nums = [1, 2];

// lastNonZeroIndex = 1 [1, 0, 0, 3, 12] i = 1;
//

console.log(moveZeroes(nums));

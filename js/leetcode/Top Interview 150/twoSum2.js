// const twoSum2 = (numbers, target) => {
//   let j = 0;
//   let i = 1;
//
//   while (j !== i && i < numbers.length) {
//     if (target - numbers[j] === numbers[i]) {
//       return [j + 1, i + 1];
//     } else {
//       i++;
//
//       if (i === numbers.length) {
//         j++;
//         i = j + 1;
//       }
//     }
//   }
//
//   return [];
// };

const twoSum2 = (numbers, target) => {
  const binarySearch = (nums, tar, excl) => {
    let max = nums.length - 1;
    let min = 0;

    while (min <= max) {
      let mid = Math.floor((max + min) / 2);

      if (nums[mid] === tar && mid !== excl) return mid;
      if (nums[mid] > tar) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }

    return -1;
  };

  for (let i = 0; i < numbers.length; i++) {
    const indexOfNumber = binarySearch(numbers, target - numbers[i], i);

    if (indexOfNumber !== -1) return [i + 1, indexOfNumber + 1];
  }

  return [];
};

const target = 8;
const numbers = [1, 2, 3, 4, 4, 9, 56, 90];

console.log(twoSum2(numbers, target));

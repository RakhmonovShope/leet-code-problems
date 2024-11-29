const longestConsecutiveSequence = (nums) => {
  console.log(new Int32Array(nums).sort());

  const n = nums.length;

  if (!n) return 0;

  const set = new Set(nums);
  const starts = new Set();

  for (let i = 0; i < n; i++) {
    if (!set.has(nums[i] - 1) && !starts.has(nums[i])) {
      starts.add(nums[i]);
    }
  }

  let count = 0;

  for (let item of starts) {
    let result = 0;

    while (set.has(item++)) {
      result++;
    }

    count = Math.max(result, count);
  }

  return count;
};

// function longestConsecutive(nums) {
//   const set = new Set(nums); // O(n)
//   let maxLength = 0;
//
//   for (let num of set) {
//     // O(n)
//     // Check if this is the start of a sequence
//     if (!set.has(num - 1)) {
//       let currentNum = num;
//       let currentLength = 1;
//
//       // Count the length of the sequence
//       while (set.has(currentNum + 1)) {
//         currentNum++;
//         currentLength++;
//       }
//
//       // Update the maximum length
//       maxLength = Math.max(maxLength, currentLength);
//     }
//   }
//
//   return maxLength;
// }

// const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
// const nums = [100, 4, 200, 1, 3, 2];
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutiveSequence(nums));

// const containsDuplicate2 = (nums, k) => {
//   const hash = new Map();
//
//   for (let i = 0; i < nums.length; i++) {
//     if (hash.has(nums[i])) {
//       hash.set(nums[i], [...hash.get(nums[i]), i]);
//     } else {
//       hash.set(nums[i], [i]);
//     }
//   }
//
//   for (let [key, arr] of hash) {
//     if (arr.length > 1) {
//       let subtract = -1;
//
//       for (let j = 0; j < arr.length; j++) {
//         subtract = Math.abs(arr[j] - arr[j + 1]);
//
//         if (subtract <= k) return true;
//       }
//     }
//   }
//
//   return false;
// };

const containsDuplicate2 = (nums, k) => {
  const s = new Set();

  // Traverse the input array
  for (let i = 0; i < nums.length; i++) {
    // If already present in hash, then we found
    // a duplicate within k distance

    if (s.has(nums[i])) return true;

    // Add this item to hashset
    s.add(nums[i]);

    // Remove the k+1 distant item
    if (i >= k) s.delete(nums[i - k]);
  }
  return false;
};

const nums = [1, 2, 3, 1];
const k = 2;

console.log(containsDuplicate2(nums, k));

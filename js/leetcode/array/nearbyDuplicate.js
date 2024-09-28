// const nearbyDuplicate = (nums, k) => {
//   for (let i = 0; i < nums.length; i++) {
//     let limit = nums.length
//
//     if (i + k + 1 <= nums.length) {
//       limit = i + k + 1;
//     }
//
//     for (let j = i + 1; j < limit; j++) {
//       if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
//     }
//   }
//   return false
// }


const nearbyDuplicate = (nums, k) => {
  const hash = new Set();
  let r = 0;

  for (let i = 0; i < nums.length; i++) {

    console.log(hash);
    if (hash.size > k) {
      hash.delete(nums[r]);
      r++;
    }

    if (hash.has(nums[i])) {
      return true;
    }

    hash.add(nums[i])
  }

  return false;
}

console.log(nearbyDuplicate([1, 2, 3, 1, 1, 2, 3], 1));
console.log(nearbyDuplicate([1, 2, 3, 1], 3));
console.log(nearbyDuplicate([1, 0, 1, 1], 2));


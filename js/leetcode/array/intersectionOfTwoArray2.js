// 1 - solution

// const intersectionOfTwoArray2 = (nums1, nums2) => {
//   const hash1 = new Set(nums1);
//   const hash2 = new Set(nums2);
//   const result = [];
//
//   for (let i of hash1) {
//     if (hash2.has(i)) {
//       const count1 = nums1.filter((item) => item === i).length;
//       const count2 = nums2.filter((item) => item === i).length;
//       let loop = Math.min(count2, count1);
//
//       while (loop > 0) {
//         result.push(i);
//         loop--;
//       }
//     }
//   }
//
//   return result;
// };

// 2 - solution

const intersectionOfTwoArray2 = (nums1, nums2) => {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!hash.has(nums1[i])) {
      const count = Math.min(
        nums1.filter((item) => item === nums1[i]).length,
        nums2.filter((item) => item === nums1[i]).length,
      );

      hash.set(nums1[i], count);
    }
  }

  return Array.from(hash.entries()).flatMap(([value, count]) =>
    Array(count).fill(value),
  );
};

const num1 = [2, 2, 4, 5];
const num2 = [2, 2, 2, 4, 4, 8, 9];

console.log(intersectionOfTwoArray2(num1, num2));

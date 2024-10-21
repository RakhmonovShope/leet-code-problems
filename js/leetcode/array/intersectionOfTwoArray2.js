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
  const sortedOne = nums1.sort((a, b) => a - b);
  const sortedTwo = nums2.sort((a, b) => a - b);
  const result = [];
  const hashIndex = new Set();

  for (let i = 0; i < sortedOne.length; i++) {
    const target = sortedOne[i];

    let max = sortedTwo.length - 1;
    let min = 0;

    while (max >= min) {
      const mid = Math.floor((max + min) / 2);

      if (sortedTwo[mid] === target && !hashIndex.has(mid)) {
        result.push(sortedTwo[mid]);
        hashIndex.add(mid);
        break;
      } else if (sortedTwo[mid] > target) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
  }

  return result;
};

const num1 = [2, 2, 4, 4, 4, 4, 4, 4, 4, 5];
const num2 = [2, 2, 2, 4, 4, 4, 8, 9];

console.log(intersectionOfTwoArray2(num1, num2));

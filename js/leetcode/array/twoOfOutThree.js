// function twoOfOutThree(nums1, nums2, nums3) {
//   const numUnique1 = new Set(nums1);
//   const numUnique2 = new Set(nums2);
//   const numUnique3 = new Set(nums3);
//   const unique = new Set([...nums1, ...nums2, ...nums3]);
//
//   const result = [];
//
//   for (let i of unique) {
//     if (numUnique1.has(i) && numUnique2.has(i)) {
//       result.push(i);
//     } else if (numUnique2.has(i) && numUnique3.has(i)) {
//       result.push(i);
//     } else if (numUnique1.has(i) && numUnique3.has(i)) {
//       result.push(i);
//     }
//   }
//
//   return result;
// }

function twoOfOutThree(nums1, nums2, nums3) {
  const hash = new Set();
  const hash1 = new Set(nums1);
  const hash2 = new Set(nums2);
  const hash3 = new Set(nums3);

  for (let i of nums1) {
    if (!hash.has(i)) {
      if (hash2.has(i)) {
        hash.add(i);
      } else if (hash3.has(i)) {
        hash.add(i);
      }
    }
  }

  for (let i of nums2) {
    if (!hash.has(i)) {
      if (hash1.has(i)) {
        hash.add(i);
      } else if (hash3.has(i)) {
        hash.add(i);
      }
    }
  }

  return [...hash];
}

const nums1 = [3, 1];
const nums2 = [2, 3];
const nums3 = [1, 2];

console.log(twoOfOutThree(nums1, nums2, nums3));

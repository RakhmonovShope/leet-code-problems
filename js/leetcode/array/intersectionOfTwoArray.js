const intersectionOfTwoArray = (nums1, nums2) => {
  const concatenatedHash = new Set([...nums1, ...nums2]);
  const hash1 = new Set(nums1);
  const hash2 = new Set(nums2);
  const concatenatedArr = [...Array.from(concatenatedHash)];
  const result = [];

  for (let i = 0; i < concatenatedArr.length; i++) {
    if (hash1.has(concatenatedArr[i]) && hash2.has(concatenatedArr[i])) {
      result.push(concatenatedArr[i]);
    }
  }

  return result;
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersectionOfTwoArray(nums1, nums2));

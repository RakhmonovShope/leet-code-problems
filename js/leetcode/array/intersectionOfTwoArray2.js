const intersectionOfTwoArray2 = (nums1, nums2) => {
  const hash1 = new Set(nums1);
  const hash2 = new Set(nums2);
  const joinedHash = new Set([...Array.from(hash1), ...Array.from(hash2)]);
  const joinedArr = Array.from(joinedHash);
  const result = [];

  for (let i = 0; i < joinedArr.length; i++) {
    const value = joinedArr[i];
    if (hash1.has(value) && hash2.has(value)) {
      const count1 = nums1.filter((item) => item === value).length;
      const count2 = nums2.filter((item) => item === value).length;
      let loopCount = Math.min(count1, count2);

      result.push(Array(loopCount).fill(value));
    }
  }

  return result.reduce((prev, item) => [...prev, ...item], []);
};

const num1 = [4, 2, 2, 5];
const num2 = [9, 4, 2, 2, 2, 8, 4];

console.log(intersectionOfTwoArray2(num1, num2));

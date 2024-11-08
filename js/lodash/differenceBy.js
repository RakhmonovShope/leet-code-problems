const difference = (nums1, nums2, iteratee) => {
  const hash2 = new Set(nums2.map((item) => iteratee(item)));
  const result = [];

  for (let i of nums1) {
    if (!hash2.has(iteratee(i))) result.push(i);
  }

  return result;
};

const nums1 = [2.2, 1.3];
const nums2 = [2.1, 3.3];

console.log(difference(nums1, nums2, Math.floor));

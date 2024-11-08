const difference = (nums1, nums2) => {
  const result = [];

  for (let i of nums1) {
    if (!nums2.includes(i)) result.push(i);
  }

  return result;
};

const nums1 = [2, 1];
const nums2 = [2, 3];

console.log(difference(nums1, nums2));

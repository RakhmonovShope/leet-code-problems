var merge = function (nums1, m, nums2, n) {
  let pointer = 0;

  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[pointer];
    pointer++;
  }

  nums1.sort((a, b) => a - b);
  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

console.log(merge(nums1, nums1.length - nums2.length, nums2, nums2.length));

var merge = function (nums1, m, nums2, n) {

  const summ = m + n;

  if (!(nums1.length == m + n && nums2.length == n && m >= 0 && n <= 200 && (1 <= summ && summ <= 200))) {
    return 'Invalid input'
  }

  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  return nums1.sort((a, b) => a - b);

};


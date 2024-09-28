const findMedian = (nums1, nums2) => {
  const nums3 = nums1.concat(nums2);

  const sortedArr = nums3.sort((a, b) => a - b);

  const len = sortedArr.length;

  if (sortedArr.length % 2 !== 0) {
    return sortedArr[Math.floor(len / 2)]
  } else {
    return (sortedArr[len / 2] + sortedArr[len / 2 - 1]) / 2
  }
}

console.log(findMedian([1, 3], [2]));
console.log(findMedian([1, 2], [3, 4]));

const minimumSizeSubArray = function (target, nums) {
  const binarySearch = (arr, tar, checkLimit) => {
    let max = arr.length - 1;
    let min = 0;

    while (max >= min) {
      let mid = Math.floor((max + min) / 2);

      if (arr[mid] === tar && mid < checkLimit) {
        return mid;
      } else if (arr[mid] > target) {
        max = mid - 1;
      } else min = mid + 1;
    }

    return -1;
  };

  nums.sort((a, b) => a - b);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      return 1;
    } else if (nums[i] < target) {
      const indexOfNum = binarySearch(target - nums[i], i);

      if (indexOfNum >= 0) {
        return 2;
      }
    }
  }

  return 0;
};

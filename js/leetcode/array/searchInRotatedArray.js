var search = function (nums, target) {
  let rotationIndex;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] < 0) {
      rotationIndex = i + 1;
      break;
    }
  }

  const pivot = nums.length - rotationIndex;

  const binarySearch = (nums, target) => {
    let min = 0;
    let max = nums.length - 1;

    while (max >= min) {
      let mid = Math.floor((min + max) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }

    return -1;
  };

  if (!pivot) return binarySearch(nums, target);

  console.log('pivot', pivot);
  nums.sort((a, b) => a - b);

  const position = binarySearch(nums, target);

  if (position < 0) {
    return -1;
  } else if (position === 0) {
    return nums.length - pivot;
  } else {
    return position - pivot;
  }
};

// const nums = [1, 2, 4, 5, 6, 7, 0];
const nums = [4, 5, 6, 7, 0, 1, 2];
// const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 2;

console.log(search(nums, target));

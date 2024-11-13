const searchInsertPosition = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  for (; low <= high;) {
    const mid = Math.floor((low + high) / 2);
    const guess = nums[mid];
    if (guess === target) return mid;
    if (guess > target) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}

console.log(searchInsertPosition([1, 3, 5, 6], 5));
console.log(searchInsertPosition([1, 3, 5, 6], 2));
console.log(searchInsertPosition([1, 3, 5, 6], 7));

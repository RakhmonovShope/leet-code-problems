const quickSort = (nums) => {

  if (nums.length < 2) return nums;

  const pivot = Math.floor((nums.length - 1) / 2);
  const pivotValue = nums[pivot];

  const left = [];
  const right = [];


  for (let i = 0; i < nums.length; i++) {
    if (i !== pivot) {
      if (nums[i] < pivotValue) {
        left.push(nums[i]);
      } else {
        right.push(nums[i])
      }
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)]
}

const heightChecker = function (heights) {

  console.log('heights.slice()', heights.slice())
  const sortedHeights = quickSort(heights);
  let count = 0;

  sortedHeights.forEach((item, i) => {
    if (item !== heights[i]) {
      count++;
    }
  })


  return count;
};


console.log(quickSort([1, 1, 4, 2, 1, 3]))

console.log(heightChecker([1, 2, 3, 4, 5]))

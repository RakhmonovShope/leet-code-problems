const quickSort = (nums) => {

  if (nums.length < 2) return nums;

  const pivot = Math.floor((nums.length - 1) / 2);
  const pivotValue = nums[pivot];

  const left = [];
  const right = [];


  for (let i = 0; i < nums.length; i++) {
    if (i !== pivot) {
      if (nums[i] > pivotValue) {
        left.push(nums[i]);
      } else {
        right.push(nums[i])
      }
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)]
}


const thirdMaxNumber = (nums) => {
  const hash = new Set(nums);
  const hashedArray = Array.from(hash);

  if (hashedArray.length < 3) return Math.max(...hashedArray);
  if (hashedArray.length === 3) return Math.min(...hashedArray);

  hashedArray.sort((a, b) => a - b);

  return hashedArray[2];
}


console.log(thirdMaxNumber([2, 1, 3, 4, 3]));

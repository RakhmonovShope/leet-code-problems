var rotate = function (nums, k) {
  const arr = [];

  const rotationCount = k % nums.length;

  for (let i = nums.length - rotationCount; i < nums.length; i++) {
    arr.push(nums[i]);
  }

  let d = nums.length - 1;
  let ind = nums.length - rotationCount - 1;

  while (ind >= 0) {
    nums[d] = nums[ind];
    d--;
    ind--;
  }

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }

  return nums;
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [1, 2];
const arr = [-1];
const k = 4;

console.log(rotate(arr, k));

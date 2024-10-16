var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    sum += this.nums[i];
  }

  return sum;
};

const numArr = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(numArr.sumRange(2, 4));

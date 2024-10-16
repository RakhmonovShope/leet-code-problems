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

  while (left <= right) {
    sum += this.nums[left];
    left++;
  }

  return sum;
};

const numArr = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(numArr.sumRange(2, 4));

var NumArray = function (nums) {
  this.prefixArray = [0];
  for (let i = 0; i < nums.length; i++) {
    this.prefixArray[i + 1] = this.prefixArray[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

NumArray.prototype.sumRange = function (left, right) {
  return this.prefixArray[right + 1] - this.prefixArray[left];
};

const numArr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log('numArr', numArr);
console.log(numArr.sumRange(0, 3));

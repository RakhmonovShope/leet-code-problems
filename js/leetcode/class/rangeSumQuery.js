var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.nums.reduce((prev, curr, index) => {
    if (index >= left && index <= right) {
      return prev + curr;
    }

    return prev;
  }, 0);
};

const numArr = new NumArray([-2, 0, 3, -5, 2, -1]);

console.log(numArr.sumRange(1, 2));

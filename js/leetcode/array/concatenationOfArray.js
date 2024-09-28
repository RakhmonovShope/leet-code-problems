var getConcatenation = function (nums) {
  const len = nums.length;
  const ans = [];
  for (let i = 0; i < len; i++) {
    ans[i] = nums[i];
    ans[i + len] = nums[i];
  }


  return ans;
};

console.log(getConcatenation([1, 2, 3]));
console.log(getConcatenation([1, 3, 2, 1]));

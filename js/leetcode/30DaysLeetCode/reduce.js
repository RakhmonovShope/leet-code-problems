var reduce = function (nums, fn, init) {
  let sum = init;
  for (let i = 0; i < nums.length; i++) {
    sum = fn(sum, nums[i]);
  }
  return sum;
};

console.log(reduce([1, 2, 3, 4], (prev, curr) => prev + curr, 0));

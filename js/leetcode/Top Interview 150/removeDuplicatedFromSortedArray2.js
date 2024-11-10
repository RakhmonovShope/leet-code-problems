var removeDuplicates2 = function (nums) {
  const hash = new Map();
  const copy = [];
  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
  }

  for ([key, value] of hash) {
    if (value >= 2) {
      copy.push(key, key);
    } else {
      copy.push(key);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = copy[i] !== undefined ? copy[i] : undefined;
  }

  return nums.filter((item) => item !== undefined).length;
};

console.log(removeDuplicates2([0, 1, 1, 1, 1, 2, 2, 2, 4]));

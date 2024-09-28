const checkArrayIsGood = (nums) => {
  const set = new Set(nums);
  
  if (!nums.includes(1)) return false

  if ((set.size !== nums.length - 1) || (set.size === nums.length)) return false;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + 1 !== nums[i + 1]) return false;
  }

  return true;
}

console.log(checkArrayIsGood([1, 3, 3, 2]))

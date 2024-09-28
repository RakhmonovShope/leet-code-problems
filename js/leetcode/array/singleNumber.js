const singleNumber = (nums) => {
  const hash = new Set();

  let hasBeen = false;

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      if (nums[i] === 1) hasBeen = true
      hash.delete(nums[i])
    } else {
      if ((nums[i] !== 1) || (nums[i] === 1 && !hasBeen)) hash.add(nums[i]);
    }
  }
  
  return Array.from(hash)[0];
}

// singleNumber([1]);
// singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);

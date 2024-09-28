const twoSum = (nums, target) => {
  const numMaps = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complete = target - nums[i];

    if (numMaps.has(complete)) {
      return [numMaps.get(complete), i];
    }

    numMaps.set(nums[i], i);
  }
}


console.log(twoSum([2, 7, 11, 15], 26))  // [0, 1]


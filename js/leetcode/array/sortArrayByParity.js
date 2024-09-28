const sortArrayByParity = (nums) => {
  let evenIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[evenIndex];
      nums[evenIndex] = temp;
      evenIndex++;
    }
  }

  return nums;
}


console.log(sortArrayByParity([4, 1, 2, 3]))

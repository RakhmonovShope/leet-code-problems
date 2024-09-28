var removeDuplicates = function (nums) {
  if(nums.length <= 2) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i++) {

    const occuranceCount = nums.filter(item => item === nums[i]).length;

    

    if (occuranceCount === 2) {
      i++;
    } else if (occuranceCount > 2) {
      nums.splice(i + 1, occuranceCount - 2);
      i = i + occuranceCount - 2;
    }
  }

  console.log(nums);
  return nums.length;
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 2, 2, 4])


console.log(removeDuplicates(nums))

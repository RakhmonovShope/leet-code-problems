const findAllNumbersDisappearedInArray = (nums) => {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) arr.push(j + 1);
  }

  return arr;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const nums = [2, 2];

console.log(findAllNumbersDisappearedInArray(nums));

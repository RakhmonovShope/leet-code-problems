var maximumSum = function (nums) {
  const getSumOfNumbers = (num) => {
    let sum = 0;

    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  let max = -1;
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    const sumOfNums = getSumOfNumbers(nums[i]);

    if (!hash.has(sumOfNums)) {
      hash.set(sumOfNums, nums[i]);
    } else {
      max = Math.max(max, nums[i] + hash.get(sumOfNums));

      hash.set();
    }
  }

  return max;

  // let max = -1;
  //
  // for (let i = 0; i < nums.length; i++) {
  //   const mainSum = hash.get(nums[i]);
  //
  //   for (let j = i + 1; j < nums.length; j++) {
  //     const secondSum = hash.get(nums[j]);
  //
  //     if (mainSum === secondSum) {
  //       max = Math.max(max, nums[i] + nums[j]);
  //     }
  //   }
  // }
  //
  // return max;
};

// const nums = [18, 43, 36, 13, 7];
const nums = [10, 12, 19, 14];

console.log(maximumSum(nums));

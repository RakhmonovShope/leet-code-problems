const smallestMissingInteger = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      sum += nums[i];
    } else {
      sum += nums[i];
      break;
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === sum) sum++;
  }

  while (nums.includes(sum)) sum++;

  return sum;
}

console.log(smallestMissingInteger([1, 2, 3, 2, 5]));
console.log(smallestMissingInteger([3, 4, 5, 1, 12, 14, 13]));
console.log(smallestMissingInteger([29, 30, 31, 32, 33, 34, 35, 36, 37]));


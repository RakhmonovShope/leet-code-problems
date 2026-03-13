var minOperations = function(nums, k) {
  let count = 0;

  const obj = {};

  let i = 0;

  while(i<nums.length) {
    if(nums[i] < k) return -1;

    if(!obj[nums[i]] && nums[i] !== k ) {
      obj[String(nums[i])] = true;
      count++;
    }

    i++
  }

  return count;
};

const arr= [4, 4, 4, 2];
const k = 2;


console.log('minOps', minOperations(arr, k))

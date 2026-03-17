function subarraySum(nums: number[], k: number): number {
  const n = nums.length;
  let count = 0;

  for(let i = 0 ;i<n; i++) {
    let temp = 0;

    for(let j =i; j<n; j++) {
      temp+=nums[j];
      if(temp === k) count++
    }
  }

  return count;
}

const nums = [1,1,1], k = 2;
console.log(subarraySum(nums, k));

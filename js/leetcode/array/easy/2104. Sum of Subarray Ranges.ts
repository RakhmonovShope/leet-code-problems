function subArrayRanges(nums: number[]): any {
  const n = nums.length;
  let sum  = 0;

  for(let i = 0 ;i<n; i++) {

      let min = nums[i];
      let max = nums[i];
    for(let j = i; j<n; j++) {


      max = Math.max(max, nums[j]);
      min = Math.min(min, nums[j]);

      sum+= max - min;

    }
  }

  return sum;
}

const arr = [1,2,3];
console.log(subArrayRanges(arr));

const nums =[0,1,1,1];


//1-solutions
function countAlternatingSubarrays(nums: number[]): number {
  let count = nums.length;

  for(let i = 0; i<nums.length - 1; i++) {
    for(let j = i+1; j<nums.length; j++) {
      if(nums[j] !== nums[j - 1]) {
        count++;

      }else {
        break;
      }
    }
  }

  return count;
}

console.log(countAlternatingSubarrays(nums));
// 2-solutions

function countAlternatingSubarrays2(nums: number[]): number {
  let count = 1;
  let result = 1;

  for(let i = 1; i<nums.length; i++) {
    if(nums[i] !== nums[i-1]) {
      count++
    }else {
      count = 1;
    }

    result += count;
  }

  return result;
}

console.log(countAlternatingSubarrays2(nums));

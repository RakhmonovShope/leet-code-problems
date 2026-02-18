function nextPermutation(nums: number[]): void {
// 1-ongdan boshlab massivni tekshiraman kamayib boruvchimi va topilgan index = -1 qilib olaman .
// 2-agar element topilsa uni indexsini saqlayman va ongdan boshlab undan katta va eng kichik sonni topaman.
// 3-agar unaqa index aniqlamasa massivni teskari tartiblab qo'yaman .

  // [1,3,5,4,2]

  let i = nums.length - 1;
  let idx = -1;

  for(i; i>0; i--) {
    if(nums[i - 1]<nums[i]) {
      idx = i - 1;
      break;
    }
  }

  if(idx === -1) {
    nums.sort((a,b) => a - b);

    return;
  }

  let min =  nums[idx + 1] - nums[idx];
  let s = -1;

  for(let j = idx + 1; j<nums.length; j++) {
    const subtract = nums[j] - nums[idx];

    if(0 < subtract && min >= subtract) {
      s = j;
      min = subtract;
    }
  }

  [nums[idx], nums[s]] = [nums[s], nums[idx]];


  let k = idx + 1;
  let r = nums.length - 1;

  while(k<r) {
    [nums[k], nums[r]] = [nums[r], nums[k]];
    k++;
    r--;
  }
}

const nums = [1,3,2];
nextPermutation(nums);
console.log(nums);


// const rotateArray = (nums, k) => {
//
//   const len = nums.length;
//   let i = 1;
//
//   while (i <= k) {
//     for (let j = len - 1; j > 0; j--) {
//       const temp = nums[j];
//       nums[j] = nums[j - 1];
//       nums[j - 1] = temp;
//     }
//     i++;
//   }
// }

const rotateArray = (nums, k) => {
  if (k === 0) return nums;
  if (nums.length === 2 && k % 2 !== 0) nums.reverse();

  if (nums.length > 2) {
    const newk = k > nums.length ? k - nums.length : k

    const left = nums.slice(0, nums.length - newk);
    const right = nums.slice(-newk);

    [...right, ...left].forEach((item, i) => {
      nums[i] = item;
    })
  }

}

let arr = [1, 2, 3];

rotateArray(arr, 4);


console.log('arr', arr)

// var moveZeroes = function(nums) {
//   let i = 0;
//   let count = 0;
//
//   while(i<nums.length && i<nums.length - count) {
//     const curr = nums[i];
//
//
//     if(curr === 0) {
//       for(let j = i;j<nums.length - 1; j++) {
//         nums[j] = nums[j+1];
//       }
//
//       nums[nums.length - 1] = curr;
//       count++;
//     }else {
//       i++;
//
//     }
//   }
// };

var moveZeroes = function(arr) {

  const n = arr.length;
  const temp = [];

  let j = 0;
  let count = 0;

  for(let i = 0; i<n; i++) {
    if(arr[i] !== 0) {
      temp[j] = arr[i];
      j++
    }else {
      count++;
    }
  }

  for(let k = 0; k<temp.length + count; k++) {
    if( k >=temp.length) {
      arr[k] = 0;
    }else {
      arr[k] = temp[k];
    }
  }
}




const arr = [3, 5, 0, 0, 4];

console.log(moveZeroes(arr))

console.log('arr',arr)

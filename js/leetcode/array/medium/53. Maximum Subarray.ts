// 1-solution

// function maxSubArray(arr: number[]): number {
//     let max = 0;
//         let result = arr;
//         const n = arr.length;
//         let i = 0;
//         for(i; i<n; i++) {
//             max += arr[i];
//         }
//         for(i = 0; i<n; i++) {
//             let sum = 0;
//             let subResult = [];
//             for(let j=i; j<n; j++ ) {
//                 sum+= arr[j];
//                 subResult.push(arr[j]);
//                 if(sum > max) {
//                     result  = subResult;
//                     max = sum;
//                 }
//             }
//         }
//         return max;
// };


// 2-solution

function maxSubArray(arr: number[]): number {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for(let i =1; i<arr.length; i++) {

    currentSum = Math.max(currentSum + arr[i], arr[i]);

    maxSum = Math.max(currentSum , maxSum);
  }

  return maxSum;
}

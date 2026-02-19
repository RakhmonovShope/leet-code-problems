
/** 1-usul time limit exceedga dush keldim */


// function isAlternating (arr) {
//   let isRelevant = true;
//
//   for(let i=1;i<arr.length; i++) {
//     if(arr[i-1] === arr[i]) {
//       isRelevant = false;
//       break;
//     }
//   }
//
//   return isRelevant
// }
//
// function numberOfAlternatingGroups(colors: number[], k: number): number {
//   let count = 0;
//   const n = colors.length;
//   for(let i =0; i<n; i++) {
//     let arr;
//
//     if(n-i < k) {
//       arr= [...colors.slice(i), ...colors.slice(0, k-(n-i))];
//     }else {
//       arr = colors.slice(i,k+i);
//     }
//
//     if(isAlternating(arr)) {
//       count++;
//     }
//   }
//
//   return count;
// }


/** 2-usul */

function numberOfAlternatingGroups(colors: number[], k: number): number {
  const n = colors.length;
  let count = 0;
  let len = 1;

  for(let i = 1; i< n+k-1; i++) {
    if(colors[i % n] !== colors[(i - 1) % n]) {
      len++;
    }else {
      len = 1;
    }

    if(len >= k) {
      count++;
    }
  }

  return count;
}

const arr = [0,1,0,0,1,0,1];
const k = 6;

console.log(numberOfAlternatingGroups(arr,k))

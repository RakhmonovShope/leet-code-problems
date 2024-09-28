// const sortBy = (arr, fn) => {
//   for (let i = 0; i < arr.length; i++) {
//     let min = fn(arr[i]);
//     let minIndex = i;
//
//     for (let j = i + 1; j < arr.length; j++) {
//       if (fn(arr[j]) < min) {
//         min = fn(arr[j]);
//         minIndex = j;
//       }
//     }
//
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// }

// console.log(sortBy([
//   {x: 0},
//   {x: -20},
//   {x: -30},
//   {x: -4},
// ], (d) => d.x));

// const sortBy = (arr, fn) => {
//   if (arr.length < 2) return arr;
//
//   let pivotIndex = Math.floor((arr.length - 1) / 2);
//   let pivotValue = fn(arr[pivotIndex]);
//   const left = [];
//   const right = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== pivotIndex) {
//       if (fn(arr[i]) < pivotValue) {
//         left.push(arr[i])
//       } else {
//         right.push(arr[i])
//       }
//     }
//   }
//
//   return [...sortBy(left, fn), arr[pivotIndex], ...sortBy(right, fn)];
// }


const sortBy = (arr, fn) => {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// console.log(sortBy(data, (d) => d.x));

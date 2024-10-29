//** Hash table solution

// const isUnique = (str) => {
//   const hash = new Map();
//
//   for (let i = 0; i < str.length; i++) {
//     hash.set(str[i], (hash.get(str[i]) || 0) + 1);
//   }
//
//   for (let count of hash.values()) {
//     if (count > 1) return false;
//   }
//
//   return true;
// };

//** Quick sort and binary search solution

// const isUnique = (str) => {
//   const charArr = [];
//
//   for (let i = 0; i < str.length; i++) {
//     charArr.push(str.charCodeAt(i));
//   }
//
//   const quickSort = (arr) => {
//     if (arr.length < 1) return arr;
//
//     const pivot = Math.floor(arr.length / 2);
//     const pivotValue = arr[pivot];
//
//     const left = [];
//     const right = [];
//
//     for (let j = 0; j < arr.length; j++) {
//       if (j !== pivot) {
//         if (arr[j] > pivotValue) {
//           right.push(arr[j]);
//         } else {
//           left.push(arr[j]);
//         }
//       }
//     }
//
//     return [...quickSort(left), pivotValue, ...quickSort(right)];
//   };
//
//   const arrForSearch = [];
//
//   const sortedCharArr = quickSort(charArr);
//
//   const binarySearch = (arr, target) => {
//     let max = arr.length - 1;
//     let min = 0;
//
//     while (max >= min) {
//       const mid = Math.floor((max + min) / 2);
//
//       if (arr[min] === target) {
//         return mid;
//       } else if (arr[mid] < target) {
//         min = mid + 1;
//       } else {
//         max = mid - 1;
//       }
//     }
//
//     return -1;
//   };
//
//   for (let i = 0; i < sortedCharArr.length; i++) {
//     if (binarySearch(arrForSearch, sortedCharArr[i]) !== -1) {
//       return false;
//     } else {
//       arrForSearch.push(sortedCharArr[i]);
//     }
//   }
//
//   return true;
// };

//** Solution without another data structure;

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) !== -1) return false;
  }

  return true;
};

const str = '2asf18nxlh33';

console.log(isUnique(str));

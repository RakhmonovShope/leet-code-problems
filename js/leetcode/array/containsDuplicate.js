//** hash table solution

// const containsDuplicate = (nums) => {
//   const set = new Set(nums);
//
//   return set.size !== nums.length;
// };

// without other data structure

// const containsDuplicate = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i], i + 1) !== -1) return true;
//   }
//
//   return false;
// };

// const containsDuplicate = (nums) => {
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
//   const sortedArr = quickSort(nums);
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
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (binarySearch(arrForSearch, sortedArr[i]) !== -1) {
//       return true;
//     } else {
//       arrForSearch.push(sortedArr[i]);
//     }
//   }
//
//   return false;
// };

const containsDuplicate = (nums) => {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);

    if (hash.get(nums[i]) > 1) return true;
  }

  return false;
};

const arr = [
  294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308,
  309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323,
  324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
  339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353,
  354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368,
  369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383,
  384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398,
  399, 400, 401, 402, 403, 404, 404,
];

console.log(containsDuplicate(arr));

// const relativeSortArray = (arr1, arr2) => {
//   const hash = new Map();
//   const result = [];
//   const notRelativeItems = [];
//
//   let i = 0;
//
//   while (i < arr1.length) {
//     hash.set(arr1[i], (hash.get(arr1[i]) || 0) + 1);
//     i++;
//   }
//
//   for (let i of arr2) {
//     result.push(...Array(hash.get(i)).fill(i));
//   }
//
//   for (let i of arr1) {
//     if (!arr2.includes(i)) {
//       notRelativeItems.push(i);
//     }
//   }
//
//   notRelativeItems.sort((a, b) => a - b);
//   result.push(...notRelativeItems);
//
//   return result;
// };

const relativeSortArray = (arr1, arr2) => {
  let count = new Array(1001).fill(0);

  for (let i of arr1) {
    count[i]++;
  }

  const result = [];
  for (let i of arr2) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
    count[i] = 0;
  }

  for (let i = 0; i < 1001; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }

  return result;
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));

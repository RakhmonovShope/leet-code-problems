const findTheDifference = (s, t) => {
  if (!s.length) return t;

  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], '');
  }

  return t;
};

// const findTheDifference = (s, t) => {
//   const quickSort = (str) => {
//     if (str.length < 2) return str;
//
//     let pivot = Math.floor(str.length / 2);
//     const pivotValue = str[pivot];
//
//     let left = '';
//     let right = '';
//
//     for (let i = 0; i < str.length; i++) {
//       if (i !== pivot) {
//         if (str[i] > pivotValue) {
//           left += str[i];
//         } else {
//           right += str[i];
//         }
//       }
//     }
//
//     return quickSort(left) + pivotValue + quickSort(right);
//   };
//
//   const sortedT = quickSort(t);
//   const sortedS = quickSort(s);
//
//   for (let i = 0; i < sortedT.length; i++) {
//     if (sortedT[i] !== sortedS[i]) return sortedT[i];
//
//     if (i === sortedT.length - 1) return sortedT[i];
//   }
// };

const s = 'sesware';
const t = 'seswaret';

console.log(findTheDifference(s, t));

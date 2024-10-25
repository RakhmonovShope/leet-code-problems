// const findTheDifference = (s, t) => {
//   if (!s.length) return t;
//
//   for (let i = 0; i < s.length; i++) {
//     t = t.replace(s[i], '');
//   }
//
//   return t;
// };

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

const findTheDifference = (s, t) => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j])) {
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      map.set(t[j], 1);
    }
  }

  let result;

  map.forEach((value, key) => {
    if (value === 1 || value === -1) result = key;
  });

  return result;
};

const s = 'a';
const t = 'aa';

console.log(findTheDifference(s, t));

// const validAnagram = (s, t) => {
//   const hash = new Map();
//
//   for (let i = 0; i < s.length; i++) {
//     hash.set(s[i], (hash.get(s[i]) || 0) + 1);
//   }
//
//   for (let j = 0; j < t.length; j++) {
//     if (hash.has(t[j])) {
//       hash.set(t[j], hash.get(t[j]) - 1);
//     } else {
//       hash.set(t[j], hash.get((t[j] || 0) + 1));
//     }
//   }
//
//   for (let [key, value] of hash) {
//     if (value !== 0) return false;
//   }
//
//   return true;
// };
//
// const validAnagram = (s, t) => {
//   if (s.length !== t.length) return false;
//
//   for (let i = 0; i < s.length; i++) {
//     t = t.replace(s[i], '');
//   }
//
//   if (t.length) return false;
//
//   return true;
// };

// const quickSort = (str) => {
//   if (str.length < 2) return str;
//
//   let pivot = Math.floor(str.length / 2);
//   const pivotValue = str[pivot];
//   let left = '';
//   let right = '';
//
//   for (let i = 0; i < str.length; i++) {
//     if (i !== pivot) {
//       if (str.charCodeAt(i) > str.charCodeAt(pivot)) {
//         right += str[i];
//       } else {
//         left += str[i];
//       }
//     }
//   }
//
//   return quickSort(left) + pivotValue + quickSort(right);
// };
//
// const validAnagram = (s, t) => {
//   if (s.length !== t.length) return false;
//
//   const sortedS = quickSort(s);
//   const sortedT = quickSort(t);
//
//   return sortedS === sortedT;
// };

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], (hash.get(s[i]) || 0) + 1);
    hash.set(t[i], (hash.get(t[i]) || 0) - 1);
  }

  for (let [key, value] of hash) {
    if (value !== 0) return false;
  }

  return true;
};

console.log(validAnagram('anagram', 'nagaram'));

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

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], '');
  }

  if (t.length) return false;

  return true;
};

console.log(validAnagram('anagrdam', 'nagarsam'));

// 1 - solution provided

// var wordPattern = function (pattern, s) {
//   const words = s.split(' ');
//
//   if (pattern.length !== words.length) return false;
//
//   const hash = new Map();
//   const viseVersion = new Map();
//
//   for (let i = 0; i < pattern.length; i++) {
//     if (hash.get(pattern[i]) || viseVersion.get(words[i])) {
//       if (
//         hash.get(pattern[i]) !== words[i] ||
//         viseVersion.get(words[i]) !== pattern[i]
//       )
//         return false;
//     } else {
//       hash.set(pattern[i], words[i]);
//       viseVersion.set(words[i], pattern[i]);
//     }
//   }
//
//   return true;
// };

const s = 'a a';
const pattern = 'aa';

console.log(wordPattern(pattern, s));

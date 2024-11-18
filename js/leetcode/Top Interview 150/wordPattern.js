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

const split = (s) => {
  const arr = [];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && str.length) {
      arr.push(str);
      str = '';
    } else {
      str += s[i];
    }

    if (i === s.length - 1 && str.length) {
      arr.push(str);
    }
  }

  return arr;
};

const wordPattern = (pattern, words) => {
  const hashP = new Map();
  const hashW = new Map();

  const wordArray = split(words);

  if (wordArray.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = wordArray[i];

    if (!hashP.has(word) && !hashW.has(char)) {
      hashP.set(word, char);
      hashW.set(char, word);
    } else if (hashP.has(word) || hashW.has(char)) {
      if (hashP.get(word) !== char || hashW.get(char) !== word) return false;
    }
  }

  return true;
};

const s = 'jquery';
const pattern = 'jquery';

console.log(wordPattern(pattern, s));

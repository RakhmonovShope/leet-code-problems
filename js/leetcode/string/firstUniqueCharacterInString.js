// 1 - solution;
// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     const regex = new RegExp(s[i], 'g');
//
//     const matches = s.match(regex);
//
//     if (matches.length === 1) return i;
//   }
//
//   return -1;
// };

const firstUniqChar = (s) => {
  const unique = new Set(s);

  for (let i of unique) {
    const copy = s;

    const replacedCopy = copy.replaceAll(i, '');

    if (s.length - replacedCopy.length === 1) {
      return s.indexOf(i);
    }
  }

  return -1;
};

const s = 'loveleetcode';

console.log('firstUniqChar', firstUniqChar(s));

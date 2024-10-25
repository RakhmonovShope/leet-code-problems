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

// 2 - solution;
//
// const firstUniqChar = (s) => {
//   const unique = new Set(s);
//
//   for (let i of unique) {
//     const copy = s;
//
//     const replacedCopy = copy.replaceAll(i, '');
//
//     if (s.length - replacedCopy.length === 1) {
//       return s.indexOf(i);
//     }
//   }
//
//   return -1;
// };

// 3 - solution

// const firstUniqChar = (s) => {
//   for (let i = 0; i < s.length; i++) {
//     const copy = s;
//     const replacedString = copy.replaceAll(s[i], '');
//
//     if (s.length - replacedString.length === 1) return i;
//   }
//
//   return -1;
// };

// 4 - solution

// const firstUniqChar = (s) => {
//   const map = new Map();
//
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }
//
//   for (let j = 0; j < s.length; j++) {
//     if (map.get(s[j]) === 1) return j;
//   }
//
//   return -1;
// };

// 5 - solution

// const firstUniqChar = (s) => {
//   const map = new Map();
//   const queue = [];
//
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else {
//       map.set(s[i], 1);
//       queue.push(s[i]);
//     }
//   }
//
//   let letter;
//
//   for (let j = 0; j < queue.length; j++) {
//     if (map.get(queue[j]) === 1) {
//       letter = queue[j];
//       break;
//     } else {
//       queue.shift();
//     }
//   }
//
//   return s.indexOf(letter);
// };

// 6 - solution

const firstUniqChar = (s) => {
  const map = new Map();
  const queue = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
      queue.push(s[i]);
    }
  }

  while (queue.length && map.get(queue[0]) > 1) {
    queue.shift();
  }

  if (queue.length) {
    return s.indexOf(queue[0]);
  } else return -1;
};
const s =
  'itwqbtcdprfsuprkrjkausiterybzncbmdvkgljxuekizvaivszowqtmrttiihervpncztuoljftlxybpgwnjb';

console.log('firstUniqChar', firstUniqChar(s));

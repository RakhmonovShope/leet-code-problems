// 1 - solution
// var longestPalindrome = function (s) {
//   const hash = new Map();
//
//   let leftString = [];
//   let rightString = [];
//   let singleString = '';
//
//   for (let i = 0; i < s.length; i++) {
//     if (hash.has(s[i])) {
//       hash.set(s[i], hash.get(s[i]) + 1);
//     } else {
//       hash.set(s[i], 1);
//     }
//   }
//
//   for (let [key, value] of hash) {
//     if (value === 1) {
//       singleString += key;
//       hash.delete(key);
//     }
//   }
//
//   for (let [key, value] of hash) {
//     let count = 0;
//
//     if (value % 2 === 0) {
//       count = value / 2;
//     } else {
//       count = Math.floor(value / 2);
//       singleString += key;
//     }
//
//     const stringArr = Array(count).fill(key);
//
//     leftString.push(...stringArr);
//     rightString.push(...stringArr);
//   }
//
//   if (singleString.length) {
//     return `${leftString}${singleString[0]}${rightString}`.length;
//   }
//
//   return `${leftString.join('')}${rightString}`.length;
// };

// 2 - solution

var longestPalindrome = function (s) {
  const hash = new Map();

  let singleStringCount = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else {
      hash.set(s[i], 1);
    }
  }

  for (let [key, value] of hash) {
    if (value === 1) {
      singleStringCount += 1;
      hash.delete(key);
    }
  }

  for (let [key, value] of hash) {
    if (value % 2 === 0) {
      result += value;
    } else {
      const count = Math.floor(value / 2);
      result += count * 2;
      singleStringCount += 1;
    }
  }

  if (singleStringCount) {
    return result + 1;
  }

  return result;
};

const s = 'abccccddttttt';

console.log(longestPalindrome(s));

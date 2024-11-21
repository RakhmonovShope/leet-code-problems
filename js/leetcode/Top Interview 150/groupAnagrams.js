// var groupAnagrams = function (strs) {
//   const hash = new Map();
//   let result = [];
//
//   for (let i = 0; i < strs.length; i++) {
//     const str = strs[i];
//
//     const sortedString = str.split('').sort().join('');
//
//     if (hash.has(sortedString)) {
//       hash.set(sortedString, [...hash.get(sortedString), strs[i]]);
//     } else {
//       hash.set(sortedString, [strs[i]]);
//     }
//   }
//
//   for (let [key, anagrams] of hash) {
//     result.push(anagrams);
//   }
//
//   return result;
// };

const getKey = function (str) {
  const arr = new Array(26).fill(0);
  let key = '';
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      key += `${String.fromCharCode(97 + i)}${arr[i]}`;
    }
  }

  return key;
};

var groupAnagrams = function (strs) {
  const hash = new Map();
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    const key = getKey(strs[i]);

    if (hash.has(key)) {
      hash.set(key, [...hash.get(key), strs[i]]);
    } else {
      hash.set(key, [strs[i]]);
    }
  }

  for (let [key, anagrams] of hash) {
    result.push(anagrams);
  }

  return result;
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat', ''];
// const strs = ['', ''];
// const strs = ['a', 'a'];

console.log(groupAnagrams(strs));

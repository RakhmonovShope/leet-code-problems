var groupAnagrams = function (strs) {
  const hash = new Map();
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];

    const sortedString = str.split('').sort().join('');

    if (hash.has(sortedString)) {
      hash.set(sortedString, [...hash.get(sortedString), strs[i]]);
    } else {
      hash.set(sortedString, [strs[i]]);
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

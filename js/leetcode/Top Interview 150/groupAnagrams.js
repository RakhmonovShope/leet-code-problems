const isValidAnagrams = (s, t) => {
  if (s.length !== t.length) return false;
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    hash.set(s[i], (hash.get(s[i]) || 0) + 1);
    hash.set(t[i], (hash.get(t[i]) || 0) - 1);
  }

  for (let [_, value] of hash) {
    if (value !== 0) return false;
  }

  return true;
};

var groupAnagrams = function (strs) {
  const hash = new Map();

  let result = [];

  let i = 0;

  while (i < strs.length) {
    const word = strs[i];
    let j = i;

    const arr = [];

    if (!hash.has(i)) {
      while (j < strs.length) {
        const isAnagram = isValidAnagrams(word, strs[j]);

        if (isAnagram && !hash.has(j)) {
          hash.set(j, true);
          arr.push(strs[j]);
        }

        if (j === strs.length - 1 && !hash.has(i)) {
          hash.set(i, true);
          arr.push(word);
        }

        j++;
      }
    }

    if (arr.length) {
      result.push(arr);
    }

    i++;
  }

  return result;
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat', ''];
// const strs = ['', ''];
// const strs = ['a', 'a'];

console.log(groupAnagrams(strs));

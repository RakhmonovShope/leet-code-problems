const isValidAnagrams = (s, t) => {
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

var groupAnagrams = function (strs) {
  const hash = new Map();

  let result = [];

  let i = 0;

  while (i < strs.length) {
    const word = strs[i];
    let j = i + 1;
    const arr = [];

    while (j < strs.length) {
      const isAnagram = isValidAnagrams(word, strs[j]);

      if (isAnagram && !hash.has(strs[j])) {
        hash.set(strs[j], true);
        arr.push(j);
      }

      if (j === strs.length - 1 && !hash.has(word)) {
        hash.set(word, true);
        arr.push(i);
      }

      j++;
    }
    console.log(arr);
    i++;
  }
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

groupAnagrams(strs);

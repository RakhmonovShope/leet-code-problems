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
  let result = [];

  let i = 0;

  const hash = new Map();

  while (i < strs.length) {
    const storage = new Map();

    const word = strs[i];
    let j = i;

    if (!hash.has(i)) {
      while (j < strs.length) {
        const isAnagram = isValidAnagrams(word, strs[j]);

        if (isAnagram && !hash.has(j)) {
          hash.set(j, true);
          storage.set(j, strs[j]);
        }

        if (j === strs.length - 1 && !hash.has(i)) {
          hash.set(i, true);
          storage.set(i, word);
        }

        j++;
      }
    } else {
      i++;
      continue;
    }

    if (storage.size) {
      result.push([...storage.values()]);
    }

    i++;
  }

  return result;
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat', ''];
// const strs = ['', ''];
// const strs = ['a', 'a'];

console.log(groupAnagrams(strs));

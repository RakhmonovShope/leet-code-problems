var wordPattern = function (pattern, s) {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const hash = new Map();
  const viseVersion = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (hash.has(pattern[i]) || viseVersion.has(words[i])) {
      if (
        hash.get(pattern[i]) !== words[i] ||
        viseVersion.get(words[i]) !== pattern[i]
      ) {
        return false;
      } else {
        hash.delete(pattern[i]);
        viseVersion.delete(words[i]);
      }
    } else {
      hash.set(pattern[i], words[i]);
      viseVersion.set(words[i], pattern[i]);
    }
  }

  return !hash.keys.length || !viseVersion.keys.length;
};

const s = 'cat dog dog cat cat';
const pattern = 'aaaa';

console.log(wordPattern(pattern, s));

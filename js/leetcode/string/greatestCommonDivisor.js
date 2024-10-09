var gcdOfStrings = function (str1, str2) {
  const hash = new Set();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      hash.add(str1[i]);
    } else if (!hash.has(str1[i])) {
      return '';
    }
  }

  if (hash.size === 0) return '';

  return Array.from(hash.values()).join('');
};

const str1 = 'TAUXXTAUXXTAUXXTAUXXTAUXX';
const str2 = 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX';

console.log(gcdOfStrings(str1, str2));

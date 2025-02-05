var areAlmostEqual = function (s1, s2) {
  const hash1 = new Map();
  const hash2 = new Map();

  for (let i = 0; i < s1.length; i++) {
    hash1.set(s1[i], (hash1.get(s1[i]) || 0) + 1);
    hash2.set(s2[i], (hash2.get(s2[i]) || 0) + 1);
  }

  for (let [key, value] of hash1.entries()) {
    if (value !== hash2.get(key)) return false;
  }

  let count = 0;

  for (let j = 0; j < s1.length; j++) {
    if (s1[j] !== s2[j]) count++;
  }

  if (count > 2) return false;

  return true;
};

const s1 = 'attack';
const s2 = 'defend';

console.log(areAlmostEqual(s1, s2));

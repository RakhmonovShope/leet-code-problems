const canConstruct = (s, k) => {
  if (s.length < k) return false;

  const hash = new Map();

  for (let char of s) {
    hash.set(char, (hash.get(char) || 0) + 1);
  }

  let oddCharsCount = 0;

  for (let value of hash.values()) {
    if (value % 2 !== 0) oddCharsCount++;
  }

  return oddCharsCount <= k;
};

// const s = 'annabelle';
// const k = 2;
const s = 'true';
const k = 4;

console.log(canConstruct(s, k));
// a -> 2
// n -> 2
// e -> 2
// l -> 2
// b -> 1

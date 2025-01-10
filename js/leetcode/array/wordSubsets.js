var wordSubsets = function (words1, words2) {
  const result = [];
  let hash2 = new Map();

  for (let i = 0; i < words2.length; i++) {
    let innerHash = new Map();

    for (let item of words2[i]) {
      innerHash.set(item, (innerHash.get(item) || 0) + 1);

      if (!hash2.has(item)) {
        hash2.set(item, 1);
      } else if (hash2.get(item) < innerHash.get(item)) {
        hash2.set(item, innerHash.get(item));
      }
    }
  }

  for (let i = 0; i < words1.length; i++) {
    let hash1 = new Map();

    for (let item of words1[i]) {
      hash1.set(item, (hash1.get(item) || 0) + 1);
    }

    let isUniversal = true;

    for (let [key, value] of hash2.entries()) {
      if (!hash1.has(key) || hash1.get(key) < value) isUniversal = false;

      if (!isUniversal) break;
    }

    if (isUniversal) result.push(words1[i]);
  }

  return result;
};

const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode'];
const words2 = ['e', 'oo'];
// const words2 = ['e', 'o'];
// const words2 = ['l', 'e'];
// const words2 = ['lo', 'eo'];

console.log(wordSubsets(words1, words2));

var countConsistentStrings = function (allowed, words) {
  let count = 0;

  const set = new Set(allowed);

  for (let i = 0; i < words.length; i++) {
    let hasAll = true;

    for (let char of words[i]) {
      if (!set.has(char)) hasAll = false;

      if (!hasAll) break;
    }

    if (hasAll) count++;
  }

  return count;
};

const allowed = 'abc';
const words = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
console.log(countConsistentStrings(allowed, words));

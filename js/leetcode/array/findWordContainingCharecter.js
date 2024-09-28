var findWordsContaining = function (words, x) {
  const set = new Set;
  const pattern = new RegExp(x, 'i');

  words.map((item, index) => {
    if (pattern.test(item)) set.add(index);
  })


  return Array.from(set.values());
};

console.log(findWordsContaining(["leet", "code"], 'e'))


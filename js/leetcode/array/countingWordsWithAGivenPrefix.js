var prefixCount = function (words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const prefix = words[i].slice(0, pref.length);

    if (prefix === pref) count++;
  }

  return count;
};

const words = ['pay', 'attention', 'practice', 'attend'];

const pref = 'at';

console.log(prefixCount(words, pref));

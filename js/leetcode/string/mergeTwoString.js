const mergeAlternately = (word1, word2) => {
  let s = '';

  for (let i = 0; i < word1.length; i++) {
    s += word1[i] + word2[i];

    if (i === word1.length - 1 && word1.length < word2.length) {
      s += word2.slice(i + 1);
      break;
    } else if (i === word2.length - 1 && word1.length > word2.length) {
      s += word1.slice(i + 1)
      break;
    }
  }

  return s;
}

console.log(mergeAlternately('abcd', 'pq'));
console.log(mergeAlternately("abc", 'pqr'));
console.log(mergeAlternately("ab", 'pqrs'));

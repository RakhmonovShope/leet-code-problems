const lengthOfLastWord = (s) => {
  let word = '';

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      word += s[i];
    }

    if (word.length && s[i - 1] === ' ') return word.length;
  }

  return word.length;
};

// const s = 'Hello World';
// const s = '   fly me   to   the moon  ';
const s = 'luffy is still joyboy';

console.log(lengthOfLastWord(s));

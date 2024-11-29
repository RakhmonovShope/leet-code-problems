const reversePrefix = (word, ch) => {
  let prefix = '';
  let charIndex = -1;

  for (let i = 0; i < word.length; i++) {
    if (ch !== word[i]) {
      prefix = word[i] + prefix;
    } else {
      prefix = word[i] + prefix;

      charIndex = i;
      break;
    }
  }

  if (charIndex < 0) {
    return word;
  } else {
    return prefix + word.slice(charIndex + 1);
  }
};

const word = 'abcdefd';
const ch = 'd';

console.log(reversePrefix(word, ch));

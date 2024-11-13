var appendCharacters = function (s, t) {
  let j = 0;
  let i = 0;

  while (i < s.length) {
    if (s[i] === t[j]) {
      j++;
    }

    i++;
  }

  return t.length - j;
};

const s = 'z';
const t = 'abcde';

console.log(appendCharacters(s, t));

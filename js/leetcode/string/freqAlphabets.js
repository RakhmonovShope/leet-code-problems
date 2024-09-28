var freqAlphabets = function (s) {
  const map = new Map();
  let newString = '';
  for (let i = 1; i <= 26; i++) {
    map.set(i <= 9 ? i.toString() : `${i}#`, String.fromCharCode(96 + i))
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      newString = newString + map.get(s.slice(i, i + 3));
      i += 1;
    } else {
      if (s[i] !== '#') {
        newString = newString + map.get(s[i]);
      }
    }
  }

  return newString
};


console.log(freqAlphabets('10#11#12'));
console.log(freqAlphabets("1326#"));

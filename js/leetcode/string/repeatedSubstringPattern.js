const repeatedSubstringPattern = (s) => {
  if (s.length <= 1) return false;

  let newPattern = '';

  for (let i = 0; i < s.length; i++) {
    const copy = newPattern.repeat(
      Math.floor(s.length / (newPattern.length || 1)),
    );

    if (copy === s) {
      return true;
    } else {
      newPattern += s[i];
    }
  }

  return false;
};

const str = 'abaababaab';

console.log(repeatedSubstringPattern(str));

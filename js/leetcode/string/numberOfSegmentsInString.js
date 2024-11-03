const numberOfSegmentsInString = (s) => {
  if (!s.length) return 0;
  let segment = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      segment += s[i];
    } else if (segment.length) {
      count++;
      segment = '';
    }

    if (i === s.length - 1 && !!segment.length) {
      count++;
    }
  }

  return count;
};

const str = 'a';

console.log(numberOfSegmentsInString(str));

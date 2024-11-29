const scoreOfString = (s) => {
  let sum = 0;
  let i = 1;

  while (i < s.length) {
    sum += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));

    i++;
  }

  return sum;
};

const s = 'hello';

console.log(scoreOfString(s));

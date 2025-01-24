var canBeValid = function (s, locked) {
  if (s.length % 2 !== 0) return false;

  let open = 0;
  let close = 0;

  for (let i = 0; i < s.length; i++) {
    if (locked[i] === '0') {
      open++;
    } else if (s[i] === '(') {
      open++;
    } else {
      close++;
    }
  }

  return open === close;
};

// const s = '))()))';
// const locked = '010100';
const s = '))))(())((()))))((()((((((())())((()))((((())()()))(()';
const locked = '101100101111110000000101000101001010110001110000000101';
// const s = '()';
// const locked = '01';

console.log(canBeValid(s, locked));

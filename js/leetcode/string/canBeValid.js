var canBeValid = function (s, locked) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  let closeCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') closeCount++;

    if (stack.length) {
      if (s[i] === ')' || (s[i] === '(' && locked[i] === '0')) {
        stack.pop();
        closeCount--;
      }
    }

    if (s[i] === '(' || (s[i] === ')' && locked[i] === '0')) {
      stack.push('(');
    }
  }

  return !stack.length && !closeCount;
};

// const s = '))()))';
const s = '))))(())((()))))((()((((((())())((()))((((())()()))(()';
// const locked = '010100';
const locked = '101100101111110000000101000101001010110001110000000101';

console.log(canBeValid(s, locked));

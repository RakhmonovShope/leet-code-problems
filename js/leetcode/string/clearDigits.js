var clearDigits = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (48 <= charCode && charCode <= 57) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};

const s = 'ab22s';

console.log(clearDigits(s));

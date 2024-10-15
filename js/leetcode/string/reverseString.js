// 1 - solution

var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }

  return s;
};

const stringArr = ['h', 'e', 'l', 'l', 'o', 'd'];

console.log(reverseString(stringArr));

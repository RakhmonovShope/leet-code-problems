/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */

// var removeOccurrences = function (s, part) {
//   while (s.includes(part)) {
//     s = s.replace(part, '');
//   }
//
//   return s;
// };

var removeOccurrences = function (s, part) {
  const stack = [];
  const partL = part.length;

  for (let char of s) {
    stack.push(char);

    if (stack.length >= partL && stack.slice(-partL).join('') === part) {
      stack.length -= partL;
    }
  }

  return stack.join('');
};

const s = 'daabcbaabcbc';
const part = 'abc';

console.log(removeOccurrences(s, part));

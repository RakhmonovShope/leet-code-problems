/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */

var removeOccurrences = function (s, part) {
  while (s.includes(part)) {
    s = s.replace(part, '');
  }

  return s;
};

const s = 'daabcbaabcbc';
const part = 'abc';

console.log(removeOccurrences(s, part));

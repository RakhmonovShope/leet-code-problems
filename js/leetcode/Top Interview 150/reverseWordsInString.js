// const reverseWordsInString = (s) => {
//   const trim = (s) => {
//     let prefixSpaceCount = 0;
//     let suffixSpaceCount = 0;
//     let i = 0;
//
//     while (i < s.length) {
//       if (s[i] === ' ') {
//         prefixSpaceCount++;
//         i++;
//       } else break;
//     }
//
//     i = s.length - 1;
//
//     while (i >= prefixSpaceCount - 1) {
//       if (s[i] === ' ') {
//         suffixSpaceCount++;
//         i--;
//       } else break;
//     }
//
//     i = prefixSpaceCount;
//
//     let result = '';
//
//     while (i <= s.length - 1 - suffixSpaceCount) {
//       result += s[i];
//       i++;
//     }
//
//     return result;
//   };
//
//   let trimmedString = trim(s);
//
//   let result = '';
//   let copy = '';
//
//   for (let i = 0; i < trimmedString.length; i++) {
//     if (trimmedString[i] !== ' ') {
//       copy += trimmedString[i];
//     } else {
//       if (copy) {
//         result = result ? `${copy} ` + result : copy + result;
//         copy = '';
//       }
//     }
//
//     if (i === trimmedString.length - 1) {
//       if (copy) {
//         result = result ? `${copy} ` + result : copy + result;
//       }
//     }
//   }
//
//   return result;
// };

const reverseWordsInString = (s) => {
  let copy = '';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      copy += s[i];
    } else if (copy) {
      result = result ? `${copy} ` + result : copy + result;
      copy = '';
    }

    if (i === s.length - 1 && copy) {
      result = result ? `${copy} ` + result : copy + result;
    }
  }

  return result;
};

// const s = '  hello world  ';
const s = 'a good   example';

console.log(reverseWordsInString(s));
console.log(reverseWordsInString(s).length);

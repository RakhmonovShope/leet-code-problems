// const validPalindrome = (s) => {
//   let sLower = s.toLowerCase();
//
//   let copy = '';
//   for (let i = 0; i < sLower.length; i++) {
//     if (
//       (48 <= sLower.charCodeAt(i) && sLower.charCodeAt(i) <= 57) ||
//       (97 <= sLower.charCodeAt(i) && sLower.charCodeAt(i) <= 122)
//     ) {
//       copy += sLower[i];
//     }
//   }
//
//   let reversedCopy = '';
//
//   for (let i = copy.length - 1; i >= 0; i--) {
//     reversedCopy += copy[i];
//   }
//
//   return reversedCopy === copy;
// };

const validPalindrome = (s) => {
  let sLower = s.replace(/[^a-zA-Z0-9]/g, '');
  sLower = sLower.toLowerCase();
  let i = 0;
  let j = sLower.length - 1;

  while (i !== Math.floor(sLower.length / 2)) {
    if (sLower[i] !== sLower[j]) return false;

    i++;
    j--;
  }

  return true;
};

const s = 'race a car';

console.log(validPalindrome(s));

const validPalindrome = (s) => {
  let sLower = s.toLowerCase();

  let copy = '';
  for (let i = 0; i < sLower.length; i++) {
    if (
      (48 <= sLower.charCodeAt(i) && sLower.charCodeAt(i) <= 57) ||
      (97 <= sLower.charCodeAt(i) && sLower.charCodeAt(i) <= 122)
    ) {
      copy += sLower[i];
    }
  }

  let reversedCopy = '';

  for (let i = copy.length - 1; i >= 0; i--) {
    reversedCopy += copy[i];
  }

  return reversedCopy === copy;
};

const s = 'A man, a plan, a canal: Panama';

console.log(validPalindrome(s));

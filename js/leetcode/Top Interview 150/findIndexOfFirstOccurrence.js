var strStr = function (haystack, needle) {
  let j = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      j++;
    } else if (j === needle.length) {
      return i - j + 1;
    } else {
      if (j) {
        i = i - j;
      }

      j = 0;
    }

    if (j === needle.length) {
      return i - j + 1;
    }
  }

  return -1;
};

console.log(strStr('leetcode', 'leeto'));

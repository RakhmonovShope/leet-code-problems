const largestCommonPrefix = (arr) => {
  if (arr.length === 1) return arr[0];

  let prefix = '';
  const wordToCompare = arr[0];

  for (let i = 0; i < wordToCompare.length; i++) {
    const allItemHasChar = arr.every((item) => item[i] === wordToCompare[i]);

    if (allItemHasChar) {
      prefix += wordToCompare[i];
    } else return prefix;
  }

  return prefix;
};

// const strs = ['flower', 'flow', 'flight'];
// const strs = ['dog', 'racecar', 'car'];
const strs = ['', ''];

console.log(largestCommonPrefix(strs));

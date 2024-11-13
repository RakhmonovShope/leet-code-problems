const isSubsequence = (s, t) => {
  let j = 0;
  let i = 0;

  while (i < t.length) {
    if (s[j] === t[i]) {
      j++;
    }

    i++;
  }

  return j === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));

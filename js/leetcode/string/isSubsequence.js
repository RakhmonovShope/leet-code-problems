const isSubsequence = (s, t) => {

  if (s.length > t.length) return false;

  let subsequence = 0;
  let t_length = t.length;

  for (let i = 0; i < t_length; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }

  return subsequence === s.length;

}


console.log(isSubsequence('acb', 'ahbgdc'))

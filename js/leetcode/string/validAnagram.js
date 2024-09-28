const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const s1 = s.split('').sort().join('');
  const s2 = t.split('').sort().join('');
  return s1 == s2;


}

console.log(validAnagram('anagram', 'nagaram'))

const canConstruct = (ransomNote, magazine) => {
  const hash = new Set();

  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazine.length; j++) {
      if (ransomNote[i] === magazine[j] && !hash.has(j)) {
        hash.add(j);
        break;
      }
    }
  }

  return hash.size === ransomNote.length;
};

const ransomNote = 'aa';
const magazine = 'ab';

console.log(canConstruct(ransomNote, magazine));

// 1 - solution

// const canConstruct = (ransomNote, magazine) => {
//   const hash = new Set();
//
//   for (let i = 0; i < ransomNote.length; i++) {
//     for (let j = 0; j < magazine.length; j++) {
//       if (ransomNote[i] === magazine[j] && !hash.has(j)) {
//         hash.add(j);
//         break;
//       }
//     }
//   }

//
// return hash.size !== ransomNote.length;
// };

// 2 - solution

// const canConstruct = (ransomNote, magazine) => {
//   const rArr = ransomNote.split('');
//   const mArr = magazine.split('');
//
//   for (let i = 0; i < rArr.length; i++) {
//     if (
//       rArr.filter((item) => item === rArr[i]).length >
//       mArr.filter((item) => item === rArr[i]).length
//     )
//       return false;
//   }
//
//   return true;
// };

const canConstruct = (ransomNote, magazine) => {
  const hash = new Map();

  for (i of ransomNote) {
    hash.set(i, (hash.get(i) || 0) + 1);
  }

  for (i of magazine) {
    if (hash.has(i) && hash.get(i) !== 0) {
      hash.set(i, hash.get(i) - 1);
    }
  }

  for (value of hash.values()) {
    if (value !== 0) return false;
  }

  return true;
};

const ransomNote = 'bg';
const magazine = 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj';

console.log(canConstruct(ransomNote, magazine));

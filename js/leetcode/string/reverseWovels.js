// 1 - solution

// const reverseVowels = (s) => {
//   const hash = new Set(['a', 'i', 'o', 'u', 'e']);
//
//   const vowels = s.split('');
//   const arr = [];
//   let count = 0;
//
//   for (let i = 0; i < vowels.length; i++) {
//     if (hash.has(vowels[i].toLowerCase())) arr.push(vowels[i]);
//   }
//
//   arr.reverse();
//
//   for (let j = 0; j < vowels.length; j++) {
//     if (hash.has(vowels[j].toLowerCase())) {
//       vowels[j] = arr[count];
//       count++;
//     }
//   }
//
//   return vowels.join('');
// };

// 2 - solution

// const reverseVowels = (s) => {
//   const hash = new Set(['a', 'i', 'o', 'u', 'e']);
//   const hashIndex = new Set();
//
//   const textArray = s.split('');
//
//   let firstIndex = 0;
//   let lastIndex = s.length - 1;
//
//   for (let i = 0; i < textArray.length; i++) {
//     if (
//       hash.has(textArray[firstIndex].toLowerCase()) &&
//       hash.has(textArray[lastIndex].toLowerCase()) &&
//       !hashIndex.has(lastIndex)
//     ) {
//       const temp = textArray[firstIndex];
//       textArray[firstIndex] = textArray[lastIndex];
//       textArray[lastIndex] = temp;
//       hashIndex.add(firstIndex);
//       console.log('has two');
//       firstIndex++;
//       lastIndex--;
//     } else if (
//       !hash.has(textArray[firstIndex].toLowerCase()) &&
//       !hash.has(textArray[lastIndex].toLowerCase())
//     ) {
//       console.log('no one');
//       firstIndex++;
//       lastIndex--;
//     } else if (
//       hash.has(textArray[firstIndex].toLowerCase()) &&
//       !hash.has(textArray[lastIndex].toLowerCase())
//     ) {
//       console.log('no last');
//       lastIndex--;
//     } else if (
//       hash.has(textArray[lastIndex].toLowerCase()) &&
//       !hash.has(textArray[firstIndex].toLowerCase())
//     ) {
//       console.log('no first');
//       firstIndex++;
//     }
//   }
//
//   return textArray.join('');
// };

// 3 - solution

const reverseVowels = (s) => {
  const hash = new Set(['a', 'A', 'i', 'I', 'o', 'O', 'u', 'U', 'e', 'E']);
  const textArr = s.split('');

  let lastIndex = textArr.length - 1;

  for (let i = 0; i < textArr.length; i++) {
    while (hash.has(textArr[i]) && !hash.has(textArr[lastIndex])) {
      lastIndex--;
    }

    if (
      hash.has(textArr[i]) &&
      hash.has(textArr[lastIndex]) &&
      i <= lastIndex
    ) {
      const temp = textArr[i];
      textArr[i] = textArr[lastIndex];
      textArr[lastIndex] = temp;

      lastIndex--;
    }
  }

  return textArr.join('');
};

// const text = 'IceCreAm';
// const text = 'ai';
// const text = 'ab';
// const text = 'race a car';
// const text = 'leetCode';
const text = 'Egad! Loretta has Adams as mad as a hatter. Old age!';
// const text = 'egad! Loretta has Adams as mad as a hatter. Old agE!';
// const righ = 'egad! LOretta has adams as mad As a hatter. old agE!';
// const righ = 'egad! LOretta has adams as mad As a hatter. old agE';
// const text = 'egad! Loretta has Adams as mad as a hatter. Old agE!';
console.log(reverseVowels(text));

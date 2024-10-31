// var compress = function (chars) {
//   let s = '';
//   let count = 0;
//   let pointer = 0;
//   const arr = [];
//
//   for (let i = 0; i <= chars.length; i++) {
//     if (chars[pointer] === chars[i]) {
//       count++;
//     } else {
//       arr.push(s);
//       let numberLength = 0;
//
//       if (count >= 10) {
//         const s = String(count);
//         numberLength = s.length;
//
//         for (let j = 0; j < s.length; j++) {
//           arr.push(Number(s[j]));
//         }
//       } else {
//         arr.push(count);
//       }
//
//       count = 1;
//     }
//
//     pointer = i;
//     s = chars[i];
//   }
//
//   return arr;
// };

const compress = (chars) => {
  let i = 0;
  let j = 0;
  let s = chars[0];

  for (let k = 0; k < chars.length + 1; k++) {
    if (chars[i] === chars[k]) {
      j++;
    } else {
      chars[i] = s;

      if (j >= 10) {
        const countArr = String(j).split('');

        for (let num = 0; num < countArr.length; num++) {
          chars[i + 1 + num] = Number(countArr[num]);
        }
      } else {
        chars[i + 1] = j;
      }

      i = s = chars[k];
    }
  }
};

const chars = [
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'b',
  'b',
  'c',
  'c',
  'c',
];

console.log(JSON.stringify(compress(chars)));

// const isomorphicString = (s, t) => {
//   if (s.length !== t.length) return false;
//
//   let mapS = {};
//   let mapT = {};
//
//   for (let i = 0; i < s.length; i++) {
//     let charS = s[i];
//     let charT = t[i];
//
//     if (mapS[charS] === undefined && mapT[charT] === undefined) {
//       mapS[charS] = charT;
//       mapT[charT] = charS;
//     } else if (mapS[charS] !== charT || mapT[charT] !== charS) {
//       return false;
//     }
//   }
//
//
//   return true;
//
// }

const isomorphicString = (s, t) => {
  const hashS = new Map();
  const hashT = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!hashS.has(charS) && !hashT.has(charT)) {
      hashS.set(charS, charT);
      hashT.set(charT, charS);
    } else if (hashS.has(charS) || hashT.has(charT)) {
      if (hashS.get(charS) !== charT || hashT.get(charT) !== charS)
        return false;
    }
  }

  return true;
};

console.log(isomorphicString('aaabbbba', 'bbbaaaba'));

const isomorphicString = (s, t) => {
  if (s.length !== t.length) return false;

  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapS[charS] === undefined && mapT[charT] === undefined) {
      mapS[charS] = charT;
      mapT[charT] = charS;
    } else if (mapS[charS] !== charT || mapT[charT] !== charS) {
      return false;
    }
  }


  return true;

}


console.log(isomorphicString('aoa', 'fsr'))

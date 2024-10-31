const oneAway = (s1, s2) => {
  let count = 0;
  let j = 0;

  while (j < Math.max(s1.length, s2.length)) {
    if (s1.length < s2.length) {
      if (s1[j - count] !== s2[j]) {
        count++;
      }
    } else if (s1.length > s2.length) {
      if (s1[j] !== s2[j - count]) {
        count++;
      }
    } else {
      if (s1[j] !== s2[j]) {
        count++;
      }
    }

    if (count > 1) return false;
    j++;
  }

  return count === 1;
};

const str1 = 'pale';
const str2 = 'bale';

console.log(oneAway(str1, str2));

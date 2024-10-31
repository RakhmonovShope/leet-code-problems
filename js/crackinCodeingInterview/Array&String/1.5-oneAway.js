const oneAway = (str1, str2) => {
  const removeCheck = (s1, s2) => {
    let count = 0;
    let j = 0;

    while (j < s1.length) {
      if (s1[j] !== s2[j - count]) {
        count++;
      }

      if (count > 1) return false;

      j++;
    }

    return count === 1;
  };

  const insertCheck = (s1, s2) => {
    let count = 0;
    let j = 0;

    while (j < s2.length) {
      if (s1[j - count] !== s2[j]) {
        count++;
      }

      if (count > 1) return false;
      j++;
    }

    return count === 1;
  };

  const checkInsertAndRemove = (s1, s2) => {
    let count = 0;
    let j = 0;
  };

  const replaceCheck = (s1, s2) => {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        count++;
      }

      if (count > 1) return false;
    }

    return count === 1;
  };

  return (
    removeCheck(str1, str2) ||
    replaceCheck(str1, str2) ||
    insertCheck(str1, str2)
  );
};

const str1 = 'pale';
const str2 = 'pae';

console.log(oneAway(str1, str2));

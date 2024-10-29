const isUnique = (str) => {
  const hash = new Map();

  for (let i = 0; i < str.length; i++) {
    hash.set(str[i], (hash.get(str[i]) || 0) + 1);
  }

  for (let count of hash.values()) {
    if (count > 1) return false;
  }

  return true;
};

const str = '2asf18nxlh33';

console.log(isUnique(str));

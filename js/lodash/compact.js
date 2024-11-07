const compact = (arr) => {
  return arr.filter(Boolean);
};

const arr = [0, 1, false, 2, '', 3];

console.log(compact(arr));

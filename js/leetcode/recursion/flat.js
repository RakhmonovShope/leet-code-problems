const flat = (arr, n) => {
  if (n === 0) return arr;

  const result = [];

  const helperFlat = (arr, helperNum) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && helperNum > 0) {
        helperFlat(arr[i], helperNum - 1);
      } else {
        result.push(arr[i]);
      }
    }
  };

  helperFlat(arr, n);
  return result;
};

const arr1 = [2, 3, 4, 5, [4, 5, [32, [2]]], [3], [4], [5]];

console.log(flat(arr1, 1));

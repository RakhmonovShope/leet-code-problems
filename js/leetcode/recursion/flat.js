const flat = (arr, n) => {
  if (n === 0) return arr;

  const result = [];

  const helperFlat = (arr, helperNum) => {
    if (helperNum === 0) return arr;
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArr.push(...helperFlat(arr[i], helperNum - 1));
      } else {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  };

  for (let j = 0; j < arr.length; j++) {
    if (Array.isArray(arr[j])) {
      result.push(...helperFlat(arr[j], n - 1));
    } else {
      result.push(arr[j]);
    }
  }

  return result;
};

const arr1 = [2, 3, 4, 5, [4, 5, [32, [2]]], [3], [4], [5]];

console.log(flat(arr1, 4));

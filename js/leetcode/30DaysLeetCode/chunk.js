var chunk = function (arr, size) {
  if (!arr.length) return [];
  if (size >= arr.length) return [arr];
  else if (size === 1) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push([arr[i]]);
    }
    return result;
  } else if (size > 1) {
    const newSize = Math.round(arr.length / size);
    let result = [];
    for (let i = 0; i < newSize; i++) {
      const newArr = [];
      const stop = (i + 1) * (newSize + 1) < arr.length ? (i + 1) * (newSize + 1) : arr.length
      for (let j = i * (newSize + 1); j < stop; j++) {
        newArr.push(arr[j]);
      }
      result.push(newArr);
    }
    return result;
  }
};


console.log(chunk([1, 9, 6, 3, 2], 4))

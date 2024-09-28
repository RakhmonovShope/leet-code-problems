const result = [];

var flat = function (arr, n) {
  if (n === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};


console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));



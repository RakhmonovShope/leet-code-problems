
var flat = function (arr, n) {
  if(n === 0) return arr;

  const result = [];

  const helperFlat = (currArr, currDepth) => {
    if(currDepth === n) return currArr;

    const newResult = [];

    for(let j = 0; j< currArr.length; j++){
      if(Array.isArray(currArr[j])){
        newResult.push(...helperFlat(currArr[j], currDepth + 1 ))
      } else {
        newResult.push(currArr[j]);
      }
    }

    return newResult;
  };

  for(let i = 0; i< arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result.push(...helperFlat(arr[i], 1)) ;
    }else {
      result.push(arr[i])
    }
  }

  return result
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11, [2, [23,43,5]]], 12], [13, 14, 15]], 4));



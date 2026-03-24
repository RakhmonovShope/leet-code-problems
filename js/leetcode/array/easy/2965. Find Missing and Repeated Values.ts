function flat(arr:number[][]): number[] {
  const result = [];


  for(let i=0; i<arr.length; i++) {
    for(let k=0; k<arr[i].length; k++) {
      result.push(arr[i][k]);
    }
  }

  return result;
}

function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const flattedArr = flat(grid);

  const n = flattedArr.length;
  // @ts-ignore
  const tempArr = new Array(n+1).fill(0);
  const result = [];


  for(let i = 0; i<n; i++) {
    tempArr[flattedArr[i]]++;

    if(tempArr[flattedArr[i]] === 2) result.push(flattedArr[i])
  }

  for(let k = 1; k<tempArr.length; k++) {
    if(tempArr[k] === 0) {
      result.push(k);
      break;
    }
  }


  return result;
}

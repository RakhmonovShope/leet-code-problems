
function replaceElements(arr: number[]): number[] {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for(let j = arr.length - 2;j>=0; j--) {
    const num = arr[j];

    arr[j] = max;

    if(max<=num) max = num;
  }

  return arr;
}

// const arr = [17,18,5,4,6,1];
const arr = [400];
console.log(replaceElements(arr));

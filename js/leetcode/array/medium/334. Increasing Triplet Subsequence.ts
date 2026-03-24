function increasingTriplet(arr: number[]): any {
  const n = arr.length;
  let max = n - 1;
  let min = 0;
  let i = 0;

  // @ts-ignore
  const smaller = new Array(n).fill(0);

  smaller[0] = -1;

  for(let i = 1; i<n;i++) {
    if(arr[i] <= arr[min]) {
      min = i;
      smaller[i] = -1;
    }else {
      smaller[i] = min;
    }
  }

  // @ts-ignore
  const greater = new Array(n).fill(0);
   greater[n-1] = -1;


  for(i = n-2; i>=0; i--) {
    if(arr[i] >= arr[max]) {
      max = i;
      greater[i] = -1;
    }else {
      greater[i] = max;
    }
  }

  for(i = 0; i<n;i++) {
    if(smaller[i] !== -1 && greater[i] !== -1) {
      return true;
    }
  }


  return false;

}

const arr = [12, 11, 10, 5, 6, 2, 30];
console.log(increasingTriplet(arr));

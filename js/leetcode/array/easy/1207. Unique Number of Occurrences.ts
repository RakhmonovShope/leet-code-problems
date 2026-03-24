function uniqueOccurrences(arr: number[]): any {

  // @ts-ignore
  const temp = new Array(arr.length+1).fill(0);

  for(let i = 0; i<arr.length;i++) {
    temp[arr[i]]++;
  }

  temp.sort((a,b) => a-b);

  for(let i = 0; i<temp.length;i++) {
    if(temp[i] === temp[i+1] && temp[i] !== 0) return false;
  }

  return true;
}

const arr = [1,2,2,1,1,3];
console.log(uniqueOccurrences(arr)) ;

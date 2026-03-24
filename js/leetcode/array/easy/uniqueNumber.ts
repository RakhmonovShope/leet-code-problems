const  findUnique =(arr) => {
  // @ts-ignore
  const hash = new Map();

  for(let i =0 ;i<arr.length; i++) {
    if(hash.has(arr[i])) {
      hash.set(arr[i], hash.get(arr[i])+1);
    }else {
      hash.set(arr[i], 1);
    }
  }

 let result;

  hash.forEach((value,key) => {
    if(value === 1) {
      result = key;
    }
  });

  return result;
}

const arr = [1,1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

console.log(findUnique(arr));

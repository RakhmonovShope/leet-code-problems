function alternatingSubarray(nums: number[]): number {
  const arr = [];
  let sign = 1;
  // const nums = [2,3,4,3,4];

  for(let i = 0; i<nums.length - 1; i++ ) {
    for(let j = i+1;j<nums.length; j++ ) {
      const subtract = nums[j] - nums[j-1];

      //   console.log(`i=>${i} j=>${j} nums[${j}]-nums[${j-1}]=${subtract}  sign=>${sign}`);

      if( Math.abs(subtract) === 1 && subtract === sign ) {
        sign *= -1;
        arr.push(nums.slice(i, j + 1));
      } else if(i !== j) {
        sign = 1;
        break;
      }

      if(j === nums.length - 1) {
        arr.push(nums.slice(i, j + 1));
        sign = 1;
      }


    }
  }

  // i = 1 j = 2 subtract =4-3= 1  signOld = 1; signNew = -1;
  // i = 1 j = 3 subtract =3-4= -1 signOld = -1; signNew = 1;
  // i = 1 j = 4 subtract =4-3= 1  signOld = 1; signNew = -1;

  if(!arr.length) return -1;

  let m = arr[0].length;

  for(let k = 1; k<arr.length; k++ ) {
    if(m < arr[k].length ){
      m = arr[k].length;
    }
  }

  return m;

}

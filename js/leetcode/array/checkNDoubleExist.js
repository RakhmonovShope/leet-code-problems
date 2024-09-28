const checkNDoubleExist = (nums) => {


  for (let i = 0; i < nums.length; i++) {

    let j = 0;
    while (j < nums.length) {
      if (nums[i] === 2 * nums[j]) return true;
      if (i === j + 1) {
        j += 2;
      } else {
        j++
      }
    }
  }

  return false;
}


console.log(checkNDoubleExist([3, 1, 7, 11]))

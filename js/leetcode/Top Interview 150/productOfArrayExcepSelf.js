const productOfArrayExceptSelf = (nums) => {
  let arrays = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    if (product == 0) {
      arrays.push(Math.abs(product));
    } else {
      arrays.push(product);
    }
  }

  return arrays;
};

const nums = [1, 2, 3, 4];
// const nums = [-1, 1, 0, -3, 3];

console.log(productOfArrayExceptSelf(nums));

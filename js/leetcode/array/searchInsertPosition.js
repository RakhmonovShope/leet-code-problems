const searchInsertPosition = function (nums, target) {

  let foundIndex = nums.indexOf(target);

  if (foundIndex < 0) {
    foundIndex = nums.findLastIndex(item => item < target);

    return foundIndex + 1;
  }


  return foundIndex;
}


console.log(searchInsertPosition([1, 3, 5, 6], 2))

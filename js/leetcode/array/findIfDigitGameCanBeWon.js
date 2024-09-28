const findIfDigitGameCanBeWon = (nums) => {
  let alice = 0;
  let bob = 0;

  nums.forEach(item => {
    if (item < 10) alice = alice + item;
    else bob = bob + item
  })


  if (alice !== bob) return true;

  return false;

}

console.log(findIfDigitGameCanBeWon([1, 2, 3, 4, 10]));
console.log(findIfDigitGameCanBeWon([1, 2, 3, 4, 5, 14]));

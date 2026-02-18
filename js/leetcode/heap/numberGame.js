var numberGame = function (nums) {
  const arr = [];

  nums.sort((a, b) => a - b);

  while (nums.length) {
    const alice = nums.shift();
    const bob = nums.shift();

    arr.push(bob, alice);
  }

  return arr;
};

const nums = [2, 5];

console.log(numberGame(nums));

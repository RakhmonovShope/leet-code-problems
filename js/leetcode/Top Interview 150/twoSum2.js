const twoSum2 = (numbers, target) => {
  let j = 0;
  let i = 1;

  while (j !== i && i < numbers.length) {
    if (target - numbers[j] === numbers[i]) {
      return [j + 1, i + 1];
    } else {
      i++;

      if (i === numbers.length) {
        j++;
        i = j + 1;
      }
    }
  }

  return [];
};

const target = 0;
const numbers = [-10, -8, -2, 1, 2, 5, 6];

console.log(twoSum2(numbers, target));

const chunk = (arr, size) => {
  if (!arr.length) return [];

  if (size >= arr) return [arr];

  const result = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);

    if (newArr.length === size) {
      result.push(newArr);
      newArr = [];
    } else if (i === arr.length - 1) {
      result.push(newArr);
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const size = 3;

console.log(chunk(arr, size));

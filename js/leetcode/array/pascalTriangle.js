var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const arr = [[1], [1, 1]];

  while (arr.length !== numRows) {
    const newArr = [1];
    const lastArr = arr[arr.length - 1];

    for (let i = 1; i < lastArr.length; i++) {
      newArr.push(lastArr[i - 1] + lastArr[i]);

      if (!lastArr[i + 1]) {
        newArr.push(1);
      }
    }

    arr.push(newArr);
  }

  return arr;
};

console.log(generate(5));

var findArray = function (pref) {
  const arr = [pref[0]];

  for (let i = 1; i < pref.length; i++) {
    arr[i] = pref[i] ^ pref[i - 1];
  }

  return arr;
};

console.log(findArray([5, 2, 0, 3, 1]))

console.log(1 ^ 5 ^ 6)
  [
  [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ]

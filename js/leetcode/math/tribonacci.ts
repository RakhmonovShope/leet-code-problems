function triFibHelper(n, arr) {
  if (n <= 1) return n;
  if (n === 2) return 1;

  if (arr[n] !== -1) return arr[n];

  arr[n] =
    triFibHelper(n - 1, arr) +
    triFibHelper(n - 2, arr) +
    triFibHelper(n - 3, arr);
}

function tribonacci(n: number): number {
  if (n <= 1) return n;
  if (n === 2) return 1;

  const arr = new Array(n + 1).fill(-1);

  triFibHelper(n, arr);

  console.log('arr', arr);
  return arr[n];
}

console.log(tribonacci(4));

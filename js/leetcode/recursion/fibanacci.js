const fibanacci = (n) => {
  let a = 0, b = 1, i = 0;
  while (i < n) {
    [a, b] = [b, a + b];
    i++;
  }
  return a;
}


console.log(fibanacci(3))

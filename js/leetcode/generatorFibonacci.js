var fibGenerator = function* () {
  let incrementValue = 0;

  const fibanacci = (n) => {
    let a = 0,
      b = 1,
      i = 0;
    while (i < n) {
      [a, b] = [b, a + b];
      i++;
    }
    return a;
  };

  while (true) {
    yield fibanacci(incrementValue);
    incrementValue++;
  }
};

const gen = fibGenerator();

for (let i = 0; i < 39; i++) {
  console.log(gen.next().value);
}

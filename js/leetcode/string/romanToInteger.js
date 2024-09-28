const romanToInteger = (s) => {
  let sum = 0;
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = s[i + 1];

    if (values[curr] > values[next]) {
      sum += values[curr];
    } else {
      sum += values[curr] - values[next];
      i++;
    }
  }

  return sum;

}

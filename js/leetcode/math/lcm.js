function lcm(a, b) {
  const helper = (num) => {
    if (num === 1) return 1;

    let values = {};

    let i = 2;

    while (i <= num) {
      if (num % i === 0) {
        values[i] = values[i] ? values[i] + 1 : 1;
        num = num / i;
      } else {
        i++;
      }
    }

    return values;
  };

  const aLcm = helper(a);
  const bLcm = helper(b);

  const result = aLcm;

  for (const key in bLcm) {
    if (result[key]) {
      if (result[key] < bLcm[key]) {
        result[key] = bLcm[key];
      }
    } else {
      result[key] = bLcm[key];
    }
  }

  let total = 1;
  Object.entries(result).forEach(([key, value]) => {
    total *= Math.pow(Number(key), value);
  });

  return total;
}

console.log(lcm(5, 12));

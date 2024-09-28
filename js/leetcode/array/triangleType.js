const triangleType = (arr) => {
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  if ((a + b) > c || (a + c) > b || (b + c) > a) {
    if (a === b && b === c && c === a) return 'equilateral';
    else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) return 'isosceles';
    else return 'scalene';

  } else {
    return 'none';
  }
}

const validPerfectSquare = (num) => {
  const isOdd = num % 2 !== 0;

  for (let i = isOdd ? 1 : 2; i <= Math.round(num / 2); i += 2) {
    if (i * i === num) return true;
  }

  return false;
};

console.log(validPerfectSquare(169));

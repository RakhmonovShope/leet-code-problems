const validPerfectSquare = (n) => {
  for (let i = 1; i <= Math.round(n / 2); i++) {
    if (i * i === n) return true;
  }

  return false;
};

console.log(validPerfectSquare(169));

const powerOfThree = (n) => {
  if (n <= 0) return false;
  
  const maxPowerOfThree = Math.pow(3, Math.floor(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(3)));

  return maxPowerOfThree % n === 0;
}

console.log(powerOfThree(27))

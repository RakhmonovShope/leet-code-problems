const isPowerOfTwo = (n) => {
  if (n === 1) return true;
  if (n === 0) return false;

  let a = n % 2;

  if (a !== 0) return false;

  return isPowerOfTwo(n / 2)
}

console.log(isPowerOfTwo(8));

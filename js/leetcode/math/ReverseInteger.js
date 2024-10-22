/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let sum = 0;
  let absNumber = Math.sign(x) === -1 ? Math.abs(x) : x;
  const maxInt32 = 2147483647; // 2^31 - 1
  const minInt32 = -2147483648; // -2^31

  while (absNumber > 0) {
    const fraction = absNumber % 10;
    sum = sum * 10 + fraction;
    absNumber = Math.floor(absNumber / 10);
  }

  if (Math.sign(x) === -1) {
    sum *= -1;
  }

  if (sum > maxInt32 || sum < minInt32) {
    return 0;
  }

  return sum;
};

console.log(reverse(1563847412));

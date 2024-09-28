/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const maxLimit = Math.pow(2, 31) - 1;
  const minLimit = -maxLimit;

  const stringfied = String(x);
  let newNumber = '';

  for (let i = stringfied.length - 1; i >= x > 0 ? 0 : 1; i--) {
    newNumber += stringfied[i];
  }

  if (Number(newNumber) > maxLimit) return 0;
  return Number(newNumber)
};

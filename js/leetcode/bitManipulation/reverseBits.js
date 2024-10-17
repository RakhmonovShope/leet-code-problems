var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = result << 1;

    result |= n & 1;

    n = n >> 1;
  }

  return result >>> 0;
};

const n = '00111001011110000010100101000000';

console.log(reverseBits(n));
// 964176192
// 964176192
// 43261596
// 43261596

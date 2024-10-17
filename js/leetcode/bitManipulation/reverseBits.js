var reverseBits = function (n) {
  const binary = n.toString(2).padStart(32, '0');

  const reversedString = binary.split('').reverse().join('');

  return reversedString;
};

const n = '00111001011110000010100101000000';

console.log(reverseBits(n));
// 964176192
// 964176192
// 43261596
// 43261596

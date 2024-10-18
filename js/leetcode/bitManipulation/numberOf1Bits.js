const numberOf1Bits = (n) => {
  const binaryString = n.toString(2);
  let count = 0;
  let i = 0;

  while (i < binaryString.length) {
    if (binaryString[i] === '1') count++;

    i++;
  }

  return count;
};

const t = 128;

console.log(numberOf1Bits(t));

const a = 0b11;
console.log('a =>', a);

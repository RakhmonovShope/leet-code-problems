const addBinary = (a, b) => {
  const firstNumber = BigInt('0b' + a);
  const secondOne = BigInt('0b' + b);
  
  return (firstNumber + secondOne).toString(2)
}

const output = addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011')
const expected = '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000';
console.log(output == expected)

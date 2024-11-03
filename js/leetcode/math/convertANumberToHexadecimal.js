const convertANumberToHexadecimal = (num) => {
  if (num < 0) {
    num = 0xffffffff + num + 1;
  }

  const hash = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  let integerPart = num;
  let hexadecimal = '';

  while (integerPart > 0) {
    let fractionPart = integerPart % 16;
    integerPart = Math.floor(integerPart / 16);

    hexadecimal = hash[fractionPart] + hexadecimal;

    if (integerPart === 0) break;
  }

  return hexadecimal || '0';
};

const n = 350;

console.log(convertANumberToHexadecimal(n));

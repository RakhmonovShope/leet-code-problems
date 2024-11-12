const integerToRoman = (num) => {
  const numString = String(num);
  let result = '';

  const defValue = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  for (let i = 0; i < numString.length; i++) {
    const letter = numString[i];

    if (letter !== '4' && letter !== '9') {
      for (let j = 0; j < Number(letter); j++) {
        result += defValue[letter];
      }
    } else {
    }
  }
};

const num = 1994;

console.log(integerToRoman(num));

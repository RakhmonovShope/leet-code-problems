const validPalindrome = (s) => {
  
  const newString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  const reversedString = newString.split('').reverse().join('');

  return newString === reversedString;
}

console.log(validPalindrome('A man, a plan, a canal: Panama'))

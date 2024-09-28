const validParenthesis = (s) => {
  const stack = [];
  const arrayOfChars = s.split('');

  if (arrayOfChars.length % 2 !== 0) return false

  const closingBracket = {
    "]": '[',
    "}": "{",
    ')': '('
  }

  for (let i = 0; i < arrayOfChars.length; i++) {
    const item = arrayOfChars[i];

    if (['[', '{', '('].includes(item)) stack.push(item);
    else if (closingBracket[item] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      return false;
    }
  }


  return !stack.length


}


console.log(validParenthesis("([}}])"))

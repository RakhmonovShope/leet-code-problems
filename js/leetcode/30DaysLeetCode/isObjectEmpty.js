const isObjectEmpty = (obj) => {
  for (let key in obj) {
    return false
  }
  return true
}


console.log(isObjectEmpty({}));
console.log(isObjectEmpty({x: 2}));

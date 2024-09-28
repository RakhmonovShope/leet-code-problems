var finalValueAfterOperations = function (operations) {
  return operations.reduce((prev, item) => {
    if (item === 'X++' || item === '++X') return ++prev;
    return --prev;
  }, 0)
};

console.log(finalValueAfterOperations(['--X', 'X++', 'X++', 'X++']))

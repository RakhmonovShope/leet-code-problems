var compose = function (functions) {
  return function (x) {
    let newX = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      newX = functions[i](newX);
    }
    return newX;
  }
};


console.log(compose([a => a + 1, a => a + 2, a => a + 3])(4));

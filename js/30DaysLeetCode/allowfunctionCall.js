let isCalled = false;

var once = function (fn) {
  return function (...args) {
    if (isCalled) return undefined;
    return {
      "calls": 1, 'value': fn(...args)
    }
  }
};


const fn = (a, b, c) => (a + b + c);
const calls = [[1, 2, 3], [2, 3, 6]]

console.log(once(fn(calls)))

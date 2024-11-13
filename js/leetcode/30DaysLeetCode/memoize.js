function memoize(fn) {
  const hash = new Map();
  let callCount = 0;
  return function (...args) {
    const key = JSON.stringify(args)
    if (!hash.has(key)) {
      if (args.length) {
        callCount += 1;
      }
      const result = fn(...args);
      hash.set(key, result);
    }
    if (!args.length) return callCount;
    return hash.get(key);
  }
}


const memoizedFn = memoize((a, b) => a + b);


console.log(memoizedFn(0, 0));
console.log(memoizedFn(0, 0));
console.log(memoizedFn());
console.log(memoizedFn());


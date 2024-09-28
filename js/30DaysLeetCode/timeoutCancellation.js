var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise1 = fn(...args);
    const rejectPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t)
    })

    return Promise.race([promise1, rejectPromise]);
  }
};

const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
};

const inputs = [5];
const t = 50;
const limited = timeLimit(fn, t);

console.log(limited(inputs));



var debounce = function (fn, t) {
  let initializationTime = Date.now();
  let timeToExecute = t;
  let timer

  return function (...args) {
    const callDifference = Date.now() - initializationTime;  // => 30 => 60

    if (callDifference < timeToExecute) {
      clearTimeout(timer);
      timeToExecute = callDifference + t;
    }

    timer = setTimeout(() => {
      fn(...args);
    }, t)
  }
};

// t = 50
// 30 / 60 / 100

// cancel => 30
// t = 50 + 30 = 80;

// cancel => 60
// t = 60 + 50 = 110

// cancel => 100
// t = 150

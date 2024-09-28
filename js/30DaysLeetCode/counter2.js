var createCounter = function (init) {
  let temp = init;

  return {
    increment: () => {
      return ++temp;
    },

    decrement: () => {
      return --temp;
    },

    reset: () => {
      temp = init;
      return temp;
    }
  }
}


const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());

class Stack {
  constructor() {
    this.items = [];
    this.mins = [];
  }

  push(value) {
    const oldMin = this.mins[this.mins.length - 1];
    const newMin = Math.min(oldMin, value);

    this.items.push(value);

    if (!this.mins.length) {
      this.mins.push(value);
    } else if (oldMin && newMin < oldMin) this.mins.push(newMin);
  }

  pop() {
    if (!this.items.length) return 'Stack is empty';

    const value = this.items[this.items.length - 1];
    const minValue = this.mins[this.mins.length - 1];

    if (value === minValue) {
      this.mins.pop();
    }

    this.items.pop();
  }

  min() {
    return this.mins[this.mins.length - 1];
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(5);
stack.push(3);
stack.push(8);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.min());

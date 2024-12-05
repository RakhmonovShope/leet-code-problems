class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }

    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    return (this.items = []);
  }
}

const stack = new Stack();

for (let i = 0; i < 10; i++) {
  stack.push(i + 1);
}

console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

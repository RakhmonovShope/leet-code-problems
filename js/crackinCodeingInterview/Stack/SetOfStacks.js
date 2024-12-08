class SetOfStacks {
  constructor(props) {
    this.items = [];
    this.threeshold = 3;
  }

  push(value) {
    const top = this.items[this.items.length - 1] || [];

    if (top.length !== this.threeshold) {
      top.push(value);
      this.items[this.items.length - 1] = top;
    } else {
      this.items.push([value]);
    }
  }

  pop() {
    if (this.items[this.items.length - 1].length === 1) {
      this.items = this.items.splice(this.items.length - 1);
    } else {
      this.items[this.items.length - 1].pop();
    }
  }

  popAt(index) {
    const values = this.items[index];

    if (values.length) {
      values.pop();
    }
  }
}

const stack = new SetOfStacks();

stack.push(23);
stack.push(11);
stack.push(145);
stack.push(2);
console.log(stack);

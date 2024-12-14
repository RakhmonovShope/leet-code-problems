class SetOfStacks {
  constructor(props) {
    this.items = [];
    this.threeshold = 3;
  }

  push(value) {
    const top = this.items[this.items.length - 1] || [];

    if (top.length !== this.threeshold) {
      top.push(value);

      if (!this.items[this.items.length - 1]) {
        this.items.push(top);
      } else {
        this.items[this.items.length - 1] = top;
      }
    } else {
      this.items.push([value]);
    }
  }

  pop() {
    if (this.items[this.items.length - 1].length === 1) {
      this.items.splice(this.items.length - 1);
    } else {
      this.items[this.items.length - 1].pop();
    }
  }

  popAt(index) {
    if (!!this.items[index]) {
      if (this.items[index].length) {
        this.items[index].pop();
      }

      if (!this.items[index].length) {
        this.items = this.items.filter((_, i) => i !== index);
      }
    }
  }
}

const stack = new SetOfStacks();

stack.push(23);
stack.push(11);
stack.push(145);
stack.push(2);
stack.push(20);
stack.push(32);
stack.push(98);
stack.popAt(1);
console.log(stack);
stack.popAt(0);
console.log(stack);
stack.popAt(2);
console.log(stack);

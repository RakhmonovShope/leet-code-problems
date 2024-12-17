class SortStack {
  constructor() {
    this.main = [];
    this.temporary = [];
  }

  push(value) {
    this.main.push(value);
  }

  pop() {
    if (this.isEmpty()) return 'Stack is empty';

    return this.main.pop();
  }

  peek() {
    return this.main[this.main.length - 1];
  }

  isEmpty() {
    return !this.main.length;
  }

  sort() {
    if (this.main.length === 1) return this.main;

    while (this.main.length) {
      if (!this.temporary.length) {
        this.temporary.push(this.main.pop());
      }

      let lastItem = this.main[this.main.length - 1];
      let lastItemTemp = this.temporary[this.temporary.length - 1];

      if (lastItem >= lastItemTemp) {
        this.temporary.push(this.main.pop());
      } else {
        let mainItem = this.main.pop();
        let tempItem = this.temporary.pop();

        this.main.push(tempItem);
        this.main.push(mainItem);
      }
    }

    while (this.temporary.length) {
      this.main.push(this.temporary.pop());
    }

    return this.main;
  }
}

const sortedStack = new SortStack();

sortedStack.push(45);
sortedStack.push(2);
sortedStack.push(45);
sortedStack.push(12);
sortedStack.push(8472);
sortedStack.push(2);
sortedStack.push(12);
sortedStack.push(726);
sortedStack.push(2);
sortedStack.sort();
console.log(sortedStack);

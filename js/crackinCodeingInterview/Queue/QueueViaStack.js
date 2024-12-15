class QueueViaStack {
  constructor(props) {
    this.mainStack = [];
    this.temporaryStack = [];
  }

  isEmpty() {
    return !this.mainStack.length && !this.temporaryStack.length;
  }

  enqueue(value) {
    this.mainStack.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return 'Queue is empty';

    while (this.mainStack.length) {
      this.temporaryStack.push(this.mainStack.pop());
    }

    return this.temporaryStack.pop();
  }

  peek() {
    if (this.isEmpty()) return 'Queue is empty';

    if (!this.temporaryStack.length) {
      while (this.mainStack.length) {
        this.temporaryStack.push(this.mainStack.pop());
      }
    }

    return this.temporaryStack[this.temporaryStack.length - 1];
  }
}

const queueWithStack = new QueueViaStack();

queueWithStack.enqueue(34);
queueWithStack.enqueue(22);
queueWithStack.enqueue(98);
console.log(queueWithStack);
queueWithStack.dequeue();
queueWithStack.dequeue();
console.log(queueWithStack);

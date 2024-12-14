class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  isEmpty() {
    return !this.items.length;
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }

    return this.items[0];
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }

    return this.items.shift();
  }
}

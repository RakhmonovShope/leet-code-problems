class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  pop() {
    const value = this.head.value;

    this.head = this.head.next;

    this.size--;

    return value;
  }

  push(value) {
    const newNode = new Node(value);

    if (!newNode) return 'Stack overflowed !';

    newNode.next = this.head;

    this.size++;

    this.head = newNode;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {}
}

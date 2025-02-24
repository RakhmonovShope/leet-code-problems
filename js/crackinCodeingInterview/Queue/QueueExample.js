class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.rear = null;
    this.front = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (!this.size) return 'Queue is empty';

    this.front = this.front.next;

    if (!this.front) this.rear = null;

    this.size--;
  }
}

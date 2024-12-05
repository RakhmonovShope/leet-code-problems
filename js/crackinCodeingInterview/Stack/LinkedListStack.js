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

  push(value) {
    let newNode = new Node(value);

    let top = this.head;

    newNode.next = top;

    this.head = newNode;

    this.size++;
  }

  pop() {
    this.head = this.head.next;

    this.size--;
  }

  peek() {
    return this.head.value;
  }

  isEmpty() {
    return !this.size;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack);

import genereateTestCases from './genereateTestCases.js';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.size++;
  }

  generateLinkedList() {
    const items = genereateTestCases(8, 10);
    console.log('items', items);
    for (let i = 0; i < items.length; i++) {
      this.add(items[i]);
    }

    return this.head;
  }

  findKthToTheLast(k) {
    let count = 0;

    let current = this.head;

    let j = this.head;
    let s = '';

    while (j) {
      s += `${j.value} ->`;

      j = j.next;
    }

    while (current !== null) {
      count++;

      if (count === this.size - k + 1) {
        return current.value;
      }

      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.generateLinkedList();
console.log(linkedList.findKthToTheLast(3));

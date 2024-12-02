import generateTestCase from './genereateTestCases.js';

export class Node {
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
    const newNode = new Node(value);

    if (this.head === null) {
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
    const randomValues = generateTestCase(10, 38, true);

    for (let i = 0; i < randomValues.length; i++) {
      this.add(randomValues[i]);
    }

    return this.head;
  }

  removeDuplicates() {
    const hash = new Set();

    let current = this.head;

    let prev = null;

    while (current.next) {
      if (hash.has(current.value)) {
        prev.next = current.next;
      } else {
        hash.add(current.value);
        prev = current;
      }

      current = prev.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.generateLinkedList();
linkedList.removeDuplicates();

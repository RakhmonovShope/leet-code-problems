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
    const randomValues = generateTestCase(10, 10, true);

    console.log('randomValues', randomValues);
    for (let i = 0; i < randomValues.length; i++) {
      this.add(randomValues[i]);
    }

    return this.head;
  }

  removeDuplicatesWithHash() {
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

    return this.head;
  }

  removeDuplicatesWithoutHash() {
    let current = this.head;

    while (current !== null) {
      let neighbour = current;

      while (neighbour.next !== null) {
        if (current.value === neighbour.next.value) {
          neighbour.next = neighbour.next.next;
        } else {
          neighbour = neighbour.next;
        }
      }

      current = current.next;
    }

    return this.head;
  }
}

const linkedList = new LinkedList();

linkedList.generateLinkedList();
console.log(JSON.stringify(linkedList.removeDuplicatesWithHash(), null, 2));

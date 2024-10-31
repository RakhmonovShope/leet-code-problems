class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }
}

const doublyLinkedList = new DoublyLinkedList();

for (let i = 0; i < 10; i++) {
  const value = Math.floor(Math.random() * 10 + i);

  doublyLinkedList.add(value);
}

console.log(doublyLinkedList);

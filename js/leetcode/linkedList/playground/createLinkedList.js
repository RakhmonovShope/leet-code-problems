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

  printList() {
    let current = this.head;
    let list = '';

    while (current) {
      list += current.value + ' -> ';
      current = current.next;
    }

    console.log(list);
  }
}

const linkedList = new LinkedList();

for (let i = 0; i < 10; i++) {
  linkedList.add(Math.floor(Math.random() * 10 + i));
}

linkedList.printList();

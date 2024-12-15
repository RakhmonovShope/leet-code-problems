// class Queue {
//   constructor() {
//     this.items = [];
//   }
//
//   enqueue(value) {
//     this.items.push(value);
//   }
//
//   isEmpty() {
//     return !this.items.length;
//   }
//
//   peek() {
//     if (this.isEmpty()) {
//       return 'Queue is empty';
//     }
//
//     return this.items[0];
//   }
//
//   dequeue() {
//     if (this.isEmpty()) {
//       return 'Queue is empty';
//     }
//
//     return this.items.shift();
//   }
// }

// class QueueWithObject {
//   constructor() {
//     this.items = {};
//     this.front = 0;
//     this.rear = 0;
//   }
//
//   isEmpty() {
//     return !Object.values(this.items).length;
//   }
//
//   enqueue(value) {
//     this.items[this.rear] = value;
//     this.rear++;
//   }
//
//   dequeue() {
//     if (this.isEmpty()) return 'Queue is empty';
//
//     delete this.items[this.front];
//
//     this.front++;
//   }
//
//   peek() {
//     if (this.isEmpty()) return 'Queue is empty';
//
//     return this.items[this.front];
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueWithLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  peek() {
    if (this.isEmpty()) return 'Queue is empty';

    const head = this.front;

    return head.value;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }

    this.rear = newNode;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return 'Queue is empty';
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }
    this.size--;
  }
}

const queueWithObject = new QueueWithLinkedList();

queueWithObject.enqueue(34);
queueWithObject.enqueue(22);
console.log(queueWithObject);
queueWithObject.dequeue();
console.log(queueWithObject);
queueWithObject.enqueue(13);
console.log(queueWithObject);
queueWithObject.dequeue();
queueWithObject.dequeue();
queueWithObject.enqueue(87);
console.log(queueWithObject);

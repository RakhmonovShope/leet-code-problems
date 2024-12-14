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

class QueueWithObject {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return !Object.values(this.items).length;
  }

  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return 'Queue is empty';

    delete this.items[this.front];

    this.front++;
  }

  peek() {
    if (this.isEmpty()) return 'Queue is empty';

    return this.items[this.front];
  }
}

const queueWithObject = new QueueWithObject();

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

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.prority = priority;
  }
}

class PriorityQueue {
  constructor(props) {
    this.items = [];
  }

  enqueue(element, priority) {
    let qElement = new QElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].prority > qElement.prority) {
        this.items.splice(i, 0, qElement);

        contain = true;
        break;
      }
    }

    if (!contain) this.items.push(qElement);
  }
}

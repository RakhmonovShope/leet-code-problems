class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown(index) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let largest = index;

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] > this.heap[largest]
    ) {
      largest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] > this.heap[largest]
    ) {
      largest = rightChild;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest);
    }
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }
}

const nums = [10, 20, 15, 30];

const Heap = new MaxHeap();

for (let i = 0; i < nums.length; i++) {
  Heap.insert(nums[i]);
}

console.log(Heap.extractMax());
console.log(Heap.heap);

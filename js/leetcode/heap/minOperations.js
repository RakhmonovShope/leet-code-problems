class Heap {
  constructor() {
    this.heap = [];
    this.heapSize = 0;
  }

  parent(index) {
    return index > 0 ? Math.floor((index - 1) / 2) : null;
  }

  left(index) {
    const l = index * 2 + 1;
    return l < this.heap.length ? l : null;
  }

  right(index) {
    const r = index * 2 + 2;
    return r < this.heap.length ? r : null;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapSize += 1;
    this.bubbleUp();
  }

  getMin() {
    return this.heap[0];
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    this.heapSize -= 1;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return max;
  }

  bubbleUp() {
    let curr = this.heap.length - 1;

    while (curr > 0) {
      let parent = this.parent(curr);

      if (this.heap[parent] <= this.heap[curr]) break;

      this.swap(parent, curr);

      curr = parent;
    }
  }

  heapifyDown(index) {
    let left = this.left(index);
    let right = this.right(index);
    let smallest = index;

    if (
      left !== null &&
      left < this.heap.length &&
      this.heap[left] < this.heap[smallest]
    ) {
      smallest = left;
    }

    if (
      right !== null &&
      right < this.heap.length &&
      this.heap[right] < this.heap[smallest]
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

var minOperations = function (nums, k) {
  const minHeap = new Heap();

  for (let value of nums) {
    minHeap.insert(value);
  }

  let count = 0;

  while (true) {
    if (minHeap.getMin() >= k) {
      break;
    }

    if (minHeap.heapSize >= 2) {
      const first = minHeap.extractMin();
      const second = minHeap.extractMin();

      const newValue = first * 2 + second;

      minHeap.insert(newValue);
    } else {
      break;
    }

    count++;
  }

  return count;
};

const nums = [1, 1, 2, 4, 9];
const k = 20;

console.log(minOperations(nums, k));

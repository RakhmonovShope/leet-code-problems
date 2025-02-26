class Heap {
  constructor() {
    this.heap = [];
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
    let curr = this.heap.length - 1;

    while (curr > 0) {
      let parent = this.parent(curr);

      if (this.heap[parent] >= this.heap[curr]) break;

      this.swap(parent, curr);

      curr = parent;
    }
  }

  heapifyDown(index) {
    let left = this.left(index);
    let right = this.right(index);
    let largest = index;

    if (
      left !== null &&
      left < this.heap.length &&
      this.heap[left] > this.heap[largest]
    ) {
      largest = left;
    }

    if (
      right !== null &&
      right < this.heap.length &&
      this.heap[right] > this.heap[largest]
    ) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }
}

const getSumOfNumbers = (num) => {
  let sum = 0;

  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
};

var maximumSum = function (nums) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    const sum = getSumOfNumbers(nums[i]);

    if (!hash.has(sum)) {
      const maxHeap = new Heap();
      maxHeap.insert(nums[i]);

      hash.set(sum, maxHeap);
    } else {
      const maxHeap = hash.get(sum);
      maxHeap.insert(nums[i]);

      hash.set(sum, maxHeap);
    }
  }

  console.log(hash);
  let max = -1;

  for (let [_, maxHeap] of hash) {
    if (maxHeap.heap.length >= 2) {
      max = Math.max(max, maxHeap.extractMax() + maxHeap.extractMax());
    }
  }

  return max;
};

const nums = [10, 12, 19, 14];

console.log(maximumSum(nums));
// // const nums = [10, 12];

// 1 - solution

// var getFinalState = function (nums, k, multiplier) {
//   while (k) {
//     let minIndex = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] < nums[minIndex]) {
//         minIndex = i;
//       }
//     }
//
//     nums[minIndex] = nums[minIndex] * multiplier;
//     k--;
//   }
//
//   return nums;
// };
//
// const nums = [2, 1, 3, 5, 6];
// const k = 5;
// const multiplier = 2;
//
// console.log(getFinalState(nums, k, multiplier));

class Heap {
  constructor() {
    this.heap = [];
  }

  insert(value, index) {
    this.heap.push({ value, index });
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  bubbleUp() {
    let curr = this.heap.length - 1;
    let parent = this.parent(curr);

    while (
      parent !== null &&
      (this.heap[curr].value < this.heap[parent].value ||
        (this.heap[curr].value === this.heap[parent].value &&
          this.heap[curr].index < this.heap[parent].index))
    ) {
      this.swap(curr, parent);
      curr = parent;
      parent = this.parent(curr);
    }
  }

  left(index) {
    const pos = 2 * index + 1;
    return pos < this.heap.length ? pos : null;
  }

  right(index) {
    const pos = 2 * index + 2;
    return pos < this.heap.length ? pos : null;
  }

  parent(index) {
    return index > 0 ? Math.floor((index - 1) / 2) : null;
  }

  heapifyDown(index) {
    const left = this.left(index);
    const right = this.right(index);
    let smallest = index;

    if (
      left !== null &&
      (this.heap[left].value < this.heap[smallest].value ||
        (this.heap[left].value === this.heap[smallest].value &&
          this.heap[left].index < this.heap[smallest].index))
    ) {
      smallest = left;
    }

    if (
      right !== null &&
      (this.heap[right].value < this.heap[smallest].value ||
        (this.heap[right].value === this.heap[smallest].value &&
          this.heap[right].index < this.heap[smallest].index))
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

var getFinalState = function (nums, k, multiplier) {
  const minHeap = new Heap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i], i);
  }

  while (k) {
    let { value, index } = minHeap.extractMin();
    const newValue = value * multiplier;
    minHeap.insert(newValue, index);

    k--;
  }

  return minHeap.heap
    .sort((a, b) => a.index - b.index)
    .map((item) => item.value);
};

const nums = [2, 1, 3, 5, 6];
const k = 5;
const multiplier = 2;

console.log(getFinalState(nums, k, multiplier));

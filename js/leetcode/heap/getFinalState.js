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
    this.heap.push([value, index]);
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

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;

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
    let smallest = index;

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild][0] < this.heap[smallest][0]
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild][0] < this.heap[smallest][0]
    ) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }
}

var getFinalState = function (nums, k, multiplier) {
  const minHeap = new Heap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i], i);
    console.log(minHeap.heap);
  }

  while (k) {
    const [value, index] = minHeap.extractMin();

    nums[index] = value * multiplier;

    minHeap.insert(nums[index], index);

    k--;
  }

  return nums;
};

const nums = [2, 1, 3, 5, 6];
const k = 5;
const multiplier = 2;

console.log(getFinalState(nums, k, multiplier));

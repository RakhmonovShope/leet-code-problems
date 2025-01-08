class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(current, node) {
    if (node.value < current.value) {
      if (current.left === null) {
        current.left = node;
      } else {
        this.#insertNode(current.left, node);
      }
    } else {
      if (current.right === null) {
        current.right = node;
      } else {
        this.#insertNode(current.right, node);
      }
    }
  }
}

const binarySearchTree = new BinarySearchTree();

const middleAdd = (items) => {
  if (!items.length) return;

  const midIndex = Math.floor(items.length / 2);
  const midElement = items[midIndex];

  const leftItems = items.slice(0, midIndex);
  const rightItems = items.slice(midIndex + 1);

  binarySearchTree.insert(midElement);

  middleAdd(leftItems);
  middleAdd(rightItems);
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

middleAdd(items);

console.log(JSON.stringify(binarySearchTree, null, 2));
// [1, 2, 3, 4, 5, 6] [8, 9, 10, 11, 12];

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

  search(value) {
    return this.#searchNode(value);
  }

  #searchNode(current, value) {
    if (current === null) return false;

    if (current.value === value) return true;

    return value < current.value
      ? this.#searchNode(current.left, value)
      : this.#searchNode(current.right, value);
  }
}

const bst = new BinarySearchTree();

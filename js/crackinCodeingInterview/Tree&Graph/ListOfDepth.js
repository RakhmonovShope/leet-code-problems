class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new LinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.list = [];
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      const queue = [this.root];

      while (queue.length) {
        const current = queue.shift();

        if (!current.left) {
          current.left = newNode;
          break;
        } else if (!current.right) {
          current.right = newNode;
          break;
        } else {
          queue.push(current.left);
          queue.push(current.right);
        }
      }
    }
  }

  inorderTraversal(node = this.root, result = [], depth = 0) {
    if (node) {
      this.inorderTraversal(node.left, result, depth + 1);
      result.push(node.value);
      this.inorderTraversal(node.right, result, depth + 1);

      if (!this.list[depth]) {
        const newList = new LinkedList();

        newList.add(node.value);

        this.list[depth] = newList;
      } else {
        const oldList = this.list[depth];

        oldList.add(node.value);

        this.list[depth] = oldList;
      }
    }

    return this.list;
  }
}

const binaryTree = new BinaryTree();

for (let i = 1; i <= 7; i++) {
  binaryTree.insert(i);
}

console.log(
  'Binary Tree Inorder Traversal:',
  JSON.stringify(binaryTree.inorderTraversal(), null, 2),
);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
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

  inorderTraversal(node = this.root, result = []) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

const binaryTree = new BinaryTree();

// for (let i = 1; i < 10; i++) {
//   binaryTree.insert(i);
// }

binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
console.log('Binary Tree Inorder Traversal:', binaryTree.inorderTraversal());

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
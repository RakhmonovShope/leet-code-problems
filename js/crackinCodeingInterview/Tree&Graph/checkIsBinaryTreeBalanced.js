class Node {
  constructor(value) {
    this.value = value;
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

  postorderTraversal(node = this.root, result = []) {
    if (node) {
      this.inorderTraversal(node.left, result);
      this.inorderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

const binaryTree = new BinaryTree();

// const aa = [3, 9, 20, null, null, 15, 7];
const aa = [1, 2, null, 3, null, null, null, 4];

for (let i = 0; i <= aa.length; i++) {
  binaryTree.insert(aa[i]);
}

console.log(JSON.stringify(binaryTree, null, 2));
console.log('Binary Tree Inorder Traversal:', binaryTree.inorderTraversal());
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

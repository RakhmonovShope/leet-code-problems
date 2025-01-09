var sortedArrayToBST = function (nums) {
  function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  let root = null;

  const insert = (value) => {
    const newNode = new TreeNode(value);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const insertNode = (current, node) => {
    if (node.val < current.val) {
      if (current.left === null) {
        current.left = node;
      } else {
        insertNode(current.left, node);
      }
    } else {
      if (current.right === null) {
        current.right = node;
      } else {
        insertNode(current.right, node);
      }
    }
  };

  const middleAdd = (items, start, end) => {
    if (start > end) return;

    const midIndex = Math.floor((start + end) / 2);
    const midElement = items[midIndex];

    insert(midElement);

    middleAdd(items, start, midIndex - 1);
    middleAdd(items, midIndex + 1, end);
  };

  middleAdd(nums, 0, nums.length - 1);

  return root;
};

const items = [-10, -3, 0, 5, 9];

console.log(JSON.stringify(sortedArrayToBST(items), null, 2));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

const l1 = createLinkedList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1,
]);
const l2 = createLinkedList([5, 6, 4]);

var addNumbers = (l1, l2) => {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    const num1 = l1 ? l1.val : 0;
    const num2 = l2 ? l2.val : 0;

    let sum = num1 + num2 + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);

    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};

addNumbers(l1, l2);

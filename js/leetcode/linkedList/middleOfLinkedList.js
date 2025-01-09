var middleNode = function (head) {
  let current = head;
  let count = 0;

  while (current.next) {
    count++;
    current = current.next;
  }
  let mid = 0;
  let another = head;

  if (count % 2 === 0) {
    mid = Math.floor(count / 2);
  } else {
    mid = Math.floor(count / 2) + 1;
  }

  while (mid) {
    another = another.next;
    mid--;
  }

  return another;
};

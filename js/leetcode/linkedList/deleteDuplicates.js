var deleteDuplicates = function (head) {
  let current = head;

  while (current !== null) {
    let neighbour = current;

    while (neighbour.next !== null) {
      if (current.value === neighbour.next.value) {
        neighbour.next = neighbour.next.next;
      } else {
        neighbour = neighbour.next;
      }
    }

    current = current.next;
  }

  return head;
};

var deleteDuplicates = function (head) {
  head = Array.from(head);

  return [...new Set(head)];
};


console.log(deleteDuplicates([1, 1, 2]))

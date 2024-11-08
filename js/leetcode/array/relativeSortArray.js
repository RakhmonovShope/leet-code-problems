const relativeSortArray = (arr1, arr2) => {
  const result = [];
  const notRelativeItems = [];

  for (let i of arr2) {
    const items = arr1.filter((item) => item === i);

    result.push(...items);
  }

  for (let i of arr1) {
    if (!arr2.includes(i)) {
      notRelativeItems.push(i);
    }
  }

  notRelativeItems.sort((a, b) => a - b);

  return [...result, ...notRelativeItems];
};

export const generateTestCase = (size, maxValue, allowDuplicates) => {
  const list = [];
  const set = new Set();

  for (let i = 0; i < size; i++) {
    let value = Math.floor(Math.random() * maxValue) + 1;
    if (!allowDuplicates) {
      while (set.has(value)) {
        value = Math.floor(Math.random() * maxValue) + 1;
      }
      set.add(value);
    }
    list.push(value);
  }

  return list;
};

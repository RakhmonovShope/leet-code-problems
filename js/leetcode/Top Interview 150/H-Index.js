const hIndex = (citations) => {
  if (citations.length === 1) {
    if (!!citations[0]) {
      return 1;
    } else return 0;
  }

  let max = 0;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      max++;
    } else {
      return max;
    }
  }

  return max || 0;
};

// const citations = [3, 0, 6, 1, 5];
// const citations = [1, 3, 1];
const citations = [11, 15];

console.log(hIndex(citations));

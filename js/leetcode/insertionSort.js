const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let insertIndex = i;


    while (insertIndex >= 0 && arr[insertIndex - 1] > arr[insertIndex]) {
      let temp = arr[insertIndex - 1];
      arr[insertIndex - 1] = arr[insertIndex];
      arr[insertIndex] = temp;

      insertIndex--;
    }
  }

  return arr
}

const arr = generateRandomArray(12);

insertionSort(arr)

console.log(arr)




const selectionSort = (arr) => {
  const n = arr.length
  
  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    let minItem = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = minItem;

  }

}


const arrayForSelectionSort = generateRandomArray(12);

selectionSort(arrayForSelectionSort)

console.log('arrayForSelectionSort', arrayForSelectionSort)

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;


  console.log('low', low)
  console.log('i', i)

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap the pivot element
  return i + 1;
}

// Test the quick sort function
const array = generateRandomArray(59);
console.log('Original Array:', array);
const sortedArray = quickSort(array);
console.log('Sorted Array:', sortedArray);

// const sortThePeople = (names, heights) => {
//   for (let i = 0; i < heights.length; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//       if (heights[i] < heights[j]) {
//
//         let temp1 = heights[i];
//         heights[i] = heights[j];
//         heights[j] = temp1;
//
//         let temp = names[i];
//         names[i] = names[j];
//         names[j] = temp;
//       }
//     }
//   }
//
//   return names;
// }

let i = 0;


const quickSort = (nums, names) => {
  i++;
  if (nums.length < 2) {
    return names;
  }

  const pivot = Math.floor(nums.length / 2);
  const pivotValue = nums[pivot];

  const left = [];
  const right = [];

  const leftNames = [];
  const rightNames = [];

  for (let i = 0; i < nums.length; i++) {
    if (i !== pivot)
      if (nums[i] > pivotValue) {
        left.push(nums[i]);
        leftNames.push(names[i]);
      } else {
        right.push(nums[i]);
        rightNames.push(names[i])
      }
  }

  const sortedLeftNames = quickSort(left, leftNames);
  const sortedRightNames = quickSort(right, rightNames);
  
  return [...sortedLeftNames, names[pivot], ...sortedRightNames];
}


quickSort([17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224], ["EPCFFt", "IEO", "Sgizfdfrims", "QTASHKQ", "Vk", "RPJOFYZUBFSIYp", "VOYGWWNCf", "WSpmqvb"]);

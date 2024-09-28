const commonPrefix = (strs) => {
  strs.sort();

  let firstString = strs[0];
  let lastString = strs[strs.length - 1];

  let index = 0;

  for (index = 0; index < firstString.length; index++) {
    if (firstString.charAt(index) !== lastString.charAt(index)) {
      break;
    }
  }

  return index == 0 ? '' : firstString.substring(0, index);


}

const arr = ["dog", "soed", "dog"];

console.log(commonPrefix(arr));
console.log('arr', arr);




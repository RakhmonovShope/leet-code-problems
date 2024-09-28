const excelSheetColumnTitle = (columnNumber) => {
  let result = '';

  while (columnNumber > 0) {
    columnNumber--;
    let remainder = columnNumber % 26;

    result = String.fromCharCode(remainder + 65) + result;

    columnNumber = Math.floor(columnNumber / 26);

  }

  return result;
}

console.log(excelSheetColumnTitle(701));

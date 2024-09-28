const ExcelSheetColumnNumber = (columnTitle) => {
  let columnNumber = 0;
  let len = columnTitle.length;
  let i = 0;

  while (i < len) {
    const charValue = columnTitle.charCodeAt(i) - 64;

    columnNumber = columnNumber * 26 + charValue

    i++;
  }

  return columnNumber;
}

console.log(ExcelSheetColumnNumber('ZFY'))

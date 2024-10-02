// arr1 = [
//   {"id": 1, "x": 2, "y": 3},
//   {"id": 2, "x": 3, "y": 6}
// ];
//
//   arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
//   ];

arr1 =
  [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
arr2 =
  [{"id":1,"b":{"c": 84},"v":[1,3]}]

var join = function(arr1, arr2) {
  const newArr = [...arr1, ...arr2]

  const transformedValue = newArr.reduce((prev, item) => ({...prev, [item.id]: item}), {})

  return Object.values(transformedValue)
};


console.log(join(arr1, arr2)) // [{"id": 1, "x": 1}, {"id": 2, "x": 9}, {"id": 3, "x": 5}]

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
  [{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
arr2 =
  [{"id":2,"o":48,"z":84,"y":61}]

var join = function(arr1, arr2) {
  const map = new Map();
  const newArr = [...arr1, ...arr2]

  newArr.forEach(item => {
    if(map.has(item.id)) {
      map.set(item.id, {...map.get(item.id), ...item})
    }else {
      map.set(item.id, item)
    }
  })

  return [...map.values()].sort((a,b) => a.id - b.id)
};


console.log(join(arr1, arr2))

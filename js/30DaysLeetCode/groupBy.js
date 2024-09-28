const arr = [{"id": "0", "name": "Juan"}, {"id": "1", "name": "Juan"}, {"id": "2", "name": "Mark"}, {
  "id": "3",
  "name": "Teresa"
}, {"id": "4", "name": "Juan"}, {"id": "5", "name": "Teresa"}, {"id": "6", "name": "Madhavi"}, {
  "id": "7",
  "name": "Mark"
}, {"id": "8", "name": "Mark"}, {"id": "9", "name": "Juan"}, {"id": "10", "name": "Mark"}, {
  "id": "11",
  "name": "Teresa"
}, {"id": "12", "name": "Mark"}, {"id": "13", "name": "Teresa"}, {"id": "14", "name": "Juan"}, {
  "id": "15",
  "name": "Madhavi"
}, {"id": "16", "name": "Madhavi"}, {"id": "17", "name": "Juan"}, {"id": "18", "name": "Teresa"}, {
  "id": "19",
  "name": "Mark"
}, {"id": "20", "name": "Mark"}, {"id": "21", "name": "Teresa"}, {"id": "22", "name": "Madhavi"}]


Array.prototype.groupBy = function (fn) {
  const hash = new Map();
  const result = {};

  this.forEach(item => {
    if (hash.has(fn(item))) {
      hash.get(fn(item)).push(item);
    } else {
      hash.set(fn(item), [item])
    }
  })

  for (const key of hash.keys()) {
    result[key] = hash.get(key);
  }

  return result;
};


console.log(arr.groupBy((item) => {
  return item.id;
}))

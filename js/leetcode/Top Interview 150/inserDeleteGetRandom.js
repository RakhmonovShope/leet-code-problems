var RandomizedSet = function () {
  this.hash = new Map();
  this.arr = [];
};

RandomizedSet.prototype.insert = function (val) {
  if (this.hash.has(val)) {
    return false;
  }

  this.hash.set(val, this.arr.length);
  this.arr.push(val);

  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.hash.has(val)) {
    return false;
  }

  const index = this.hash.get(val);

  const temp = this.arr[this.arr.length - 1];

  this.hash.set(temp, index);

  this.arr[this.arr.length - 1] = this.arr[index];
  this.arr[index] = temp;

  this.arr.pop();
  this.hash.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length);

  return this.arr[randomIndex];
};

const val = 2;

var obj = new RandomizedSet();
console.log(obj.getRandom());
console.log(obj.insert(1));
console.log(obj.remove(2));
console.log(obj.insert(2));
console.log(obj.getRandom());
console.log(obj.remove(1));
console.log(obj);
console.log(obj.insert(2));
console.log(obj.getRandom());

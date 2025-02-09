var NumberContainers = function () {
  this.hashIndex = new Map();
  this.hashNumber = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */

NumberContainers.prototype.change = function (index, number) {
  const oldNumber = this.hashIndex.get(index);

  if (this.hashIndex.has(index) && oldNumber !== number) {
    const set = this.hashNumber.get(oldNumber);
    set.delete(index);

    this.hashNumber.set(oldNumber, set);
  }

  const newSet = this.hashNumber.has(number)
    ? Array.from(this.hashNumber.get(number))
    : [];

  newSet.push(index);

  newSet.sort((a, b) => a - b);

  this.hashNumber.set(number, new Set(newSet));

  this.hashIndex.set(index, number);
};

/**
 * @param {number} number
 * @return {number}
 */

NumberContainers.prototype.find = function (number) {
  if (this.hashNumber.has(number)) {
    const set = this.hashNumber.get(number);

    for (let index of set) {
      return index;
    }
  } else {
    return -1;
  }
};

const nc = new NumberContainers();

console.log(nc.find(10));
nc.change(1000000000, 10);
nc.change(2, 10);
nc.change(3, 10);
console.log(nc.find(10));

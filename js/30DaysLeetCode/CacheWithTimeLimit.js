var TimeLimitedCache = function () {
  this.hash = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const isExisting = this.hash.has(key);

  if (isExisting) {
    clearTimeout(this.hash.get(key).timer);
  }

  const timer = setTimeout(() => {
    this.hash.delete(key);
  }, duration);

  this.hash.set(key, {value, timer});

  return isExisting;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.hash.has(key)) {
    return this.hash.get(key).value;
  }
  return -1;
};


TimeLimitedCache.prototype.count = function () {
  return this.hash.size;
};

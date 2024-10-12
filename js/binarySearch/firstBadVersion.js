var solution = function (isBadVersion) {
  const badVersions = new Set();

  return function (n) {
    let pivot = Math.round(n / 2);

    let max = n;
    let min = 0;

    while (true) {
      if (isBadVersion(pivot)) {
        max = pivot;

        badVersions.add(pivot);

        pivot = Math.round((max + min) / 2);
      } else {
        min = pivot;
        pivot = Math.round((max + min) / 2);
      }

      if (badVersions.has(pivot)) return pivot;
    }
  };
};

const isBasVersion = (version) => {
  return version > 3;
};

console.log(solution(isBasVersion)(5));

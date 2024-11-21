// const happyNumber = (n, visited = {}) => {
//   if (n === 1) {
//     return true;
//   }
//
//   if (visited[n]) return false;
//
//   visited[n] = true;
//
//   let sum = 0;
//   const ss = String(n);
//
//   for (let i = 0; i < ss.length; i++) {
//     sum += Math.pow(Number(ss[i]), 2);
//   }
//
//
//   return happyNumber(sum, visited)
// }

const happyNumber = (n) => {
  const hash = new Map();

  const helper = (num) => {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
      sum += Math.pow(Number(num[i]), 2);
    }

    if (sum === 1) return true;

    if (hash.has(String(sum))) {
      return false;
    } else {
      hash.set(String(sum), true);

      return helper(String(sum));
    }
  };

  return helper(String(n));
};

console.log(happyNumber(19));

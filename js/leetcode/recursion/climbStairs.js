// const climbStairs = (n) => {
//   if (n === 0) return 1;
//   if (n === 1) return 1;
//
//
//   return climbStairs(n - 1) + climbStairs(n - 2);
// }

const climbStairs = (n) => {
  let first = 1;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let curr = first + second;
    first = second;
    second = curr;
  }

  return second;
};

console.log(climbStairs(44));

const happyNumber = (n, visited = {}) => {
  if (n === 1) {
    return true;
  }

  if (visited[n]) return false;

  visited[n] = true;
  
  let sum = 0;
  const ss = String(n);

  for (let i = 0; i < ss.length; i++) {
    sum += Math.pow(Number(ss[i]), 2);
  }


  return happyNumber(sum, visited)
}


console.log(happyNumber(2));

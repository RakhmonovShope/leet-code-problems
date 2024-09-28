const sqrt = (x) => {

  if (x == 0) return 0;
  else if (1 <= x && x < 4) return 1;


  for (let i = 2; i <= x / 2; i++) {
    if (i * i === x || (((i + 1) * (i + 1)) > x) && (i * i < x)) {
      return i;
    }
  }


}


console.log(sqrt(16))

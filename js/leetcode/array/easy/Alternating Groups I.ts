function numberOfAlternatingGroups(colors: number[]): number {
  let count = 0;
  const l = colors.length;

  for(let i = 0; i<l; i++) {

    if(i===0 && colors[l-1] !== colors[i] && colors[i+1] !== colors[i] ) {
      count++;
    }

    if(i === l-1 && colors[i] !== colors[i-1] && colors[i] !== colors[0]) {
      count++;
    }

    if(colors[i-1] === colors[i+1] && colors[i]!==colors[i+1]){
      count++
    }
  }

  return count;
}

const sortingSentence = (s) => {
  const map = new Map();
  const splitted = s.split(' ');

  splitted.forEach(item => {
    const key = item.slice(item.length - 1);
    const value = item.slice(0, item.length - 1);
    map.set(key, value);
  })


  const sortedKeys = [...map.keys()].sort((a, b) => a - b);

  const sortedString = sortedKeys.map(key => map.get(key));


  return sortedString.join(' ');
}


console.log(sortingSentence('is2 sentence4 This1 a3'))

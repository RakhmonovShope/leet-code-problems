let rotateString = function(s, goal) {
  if(s.length !== goal.length) return false;
  const n = s.length;
  const arr = s.split('');



  for(let i = 0; i<n; i++) {
    const temp = arr[n - 1];

    for(let l = n - 1; l>0 ; l--) {
      arr[l] = arr[l-1];
    }

    arr[0] = temp;

    if(arr.join('') === goal) return true;
  }


  return false;
};

let s = "abcde";
// s[4] = 'f';

// console.log(s);

const goal = "cdeab";

console.log(rotateString(s, goal));

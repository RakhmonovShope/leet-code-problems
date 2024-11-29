const maximumAchievableX = (num, t) => {
  while (t) {
    num = num + 2;

    t--;
  }

  return num;
};

const num = 3;
const t = 2;

console.log(maximumAchievableX(num, t));

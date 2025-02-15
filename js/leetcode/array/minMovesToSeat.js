// var minMovesToSeat = function (seats, students) {
//   seats.sort((a, b) => a - b);
//   students.sort((a, b) => a - b);
//
//   let count = 0;
//
//   for (let i = 0; i < seats.length; i++) {
//     count += Math.abs(seats[i] - students[i]);
//   }
//
//   return count;
// };

var minMovesToSeat = function (seats, students) {
  const max = Math.max(...seats, ...students);

  const arrSeats = new Array(max + 1).fill(0);
  const arrStudents = new Array(max + 1).fill(0);

  for (let inx of seats) {
    arrSeats[inx]++;
  }

  for (let inx of students) {
    arrStudents[inx]++;
  }

  let i = 0;
  let j = 0;
  let count = 0;

  while (i <= max && j <= max) {
    while (i <= max && arrSeats[i] === 0) i++;
    while (j <= max && arrStudents[j] === 0) j++;

    if (i > max || j > max) break;

    count += Math.abs(i - j);

    arrSeats[i]--;
    arrStudents[j]--;
  }

  return count;
};

const seats = [3, 1, 5];
const students = [2, 7, 4];

console.log(minMovesToSeat(seats, students)); // 4

// const seats2 = [0, 1, 0, 1, 0, 1];
// const seats2 = [0, 0, 1, 0, 1, 0, 0, 1];

//1
// i = 1;
// j = 2;
// count = 1
// const seats2 = [0, 0, 0, 1, 0, 1];
// const seats2 = [0, 0, 0, 0, 1, 0, 0, 1];

//2
// i = 3;
// j = 4;
// count = 1 + 1
// const seats2 = [0, 0, 0, 0, 0, 1];
// const seats2 = [0, 0, 0, 0, 0, 0, 0, 1];

//3
// i = 5;
// j = 7;
// count = 1 + 1 + 2
// const seats2 = [0, 0, 0, 0, 0, 0];
// const seats2 = [0, 0, 0, 0, 0, 0, 0, 0];

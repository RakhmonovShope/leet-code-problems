// var reverseList = function (head) {
//   let prev = null;
//   let current = head;
//
//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// };
//
//

function myFunction() {
  console.log(this);
}

myFunction();

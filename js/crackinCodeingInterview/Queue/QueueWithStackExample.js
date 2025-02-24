// class QueueWithStackExample {
//   constructor() {
//     this.main = [];
//     this.second = [];
//   }
//
//   enqueue(value) {
//     this.main.push(value);
//   }
//
//   dequeue() {
//     if (!this.second.length) {
//       while (this.main.length) {
//         this.second.push(this.main.pop());
//       }
//     }
//
//     return this.second.pop();
//   }
//
//   isEmpty() {
//     return !this.main.length && !this.second.length;
//   }
// }

let map = new Map();
let weakMap = new WeakMap();

let obj = { name: 'Ali' };

map.set(obj, 'Value in Map');
weakMap.set(obj, 'Value in WeakMap');

console.log(map.get(obj)); // "Value in Map"
console.log(weakMap.get(obj)); // "Value in WeakMap"

obj = null; // Obyektga bog‘langan boshqa o‘zgaruvchi yo‘q!

console.log(map); // Hali ham eski obyektni saqlaydi
console.log(weakMap);

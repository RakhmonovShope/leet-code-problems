class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this.order = 0;
  }

  enqueue(animal) {
    animal.order = this.order++;

    if (animal.type === 'dog') {
      this.dogQueue.push(animal);
    } else {
      this.catQueue.push(animal);
    }
  }

  dequeueAny() {
    if (!this.catQueue.length && !this.dogQueue.length)
      return 'Cat and Dog queues are empty!';

    if (!this.catQueue.length) return this.dogQueue.shift();
    if (!this.dogQueue.length) return this.catQueue.shift();

    const dogOrder = this.dogQueue[0]?.order;
    const catOrder = this.catQueue[0]?.order;

    if (dogOrder < catOrder) {
      return this.dogQueue.shift();
    } else {
      return this.catQueue.shift();
    }
  }

  dequeueCat() {
    if (!this.catQueue.length) return 'There is not cat in queue';

    return this.catQueue.shift();
  }

  dequeueDog() {
    if (!this.dogQueue.length) return 'There is not dog in queue';

    return this.dogQueue.shift();
  }
}

const animalShelter = new AnimalShelter();

animalShelter.enqueue({
  type: 'dog',
  name: 'Bob',
});
//
// animalShelter.enqueue({
//   type: 'cat',
//   name: 'Kisa',
// });

animalShelter.enqueue({
  type: 'dog',
  name: 'Sharik',
});

console.log(animalShelter.dequeueAny());
console.log(animalShelter.dequeueAny());
console.log(animalShelter.dequeueAny());

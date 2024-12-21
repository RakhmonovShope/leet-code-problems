const TreeAsObject = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: [],
        },
        {
          value: 4,
          children: 5,
        },
      ],
    },
    {
      value: 3,
      children: [
        {
          value: 6,
          children: [],
        },
        {
          value: 7,
          children: [],
        },
      ],
    },
  ],
};

class TreeAsClass {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

const root = new Tree(1);
const child1 = new Tree(2);
const child2 = new Tree(3);

root.children.push(child1, child2);
child1.children.push(new Tree(4), new Tree(5));
child2.children.push(new Tree(6), new Tree(7));
console.log(JSON.stringify(root, null, 4));

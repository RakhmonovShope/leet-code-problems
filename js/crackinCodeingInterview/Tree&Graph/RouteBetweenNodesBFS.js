const routeBetweenNodes = (graph, start, end) => {
  const visited = new Set();
  const queue = graph[start];

  while (queue.length) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);

      if (node === end) return true;

      for (let neighbour of graph[node] || []) {
        queue.push(neighbour);
      }
    }
  }

  return false;
};

const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: ['F'],
  F: [],
};

console.log(routeBetweenNodes(graph, 'A', 'E'));

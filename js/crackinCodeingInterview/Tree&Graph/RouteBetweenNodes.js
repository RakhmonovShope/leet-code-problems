const routeBetweenNodes = (graph, start, end) => {
  const visited = new Set();

  const stack = graph[start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);

      if (node === end) return true;

      for (let neighbour of graph[node] || []) {
        stack.push(neighbour);
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

console.log(routeBetweenNodes(graph, 'A', 'B'));

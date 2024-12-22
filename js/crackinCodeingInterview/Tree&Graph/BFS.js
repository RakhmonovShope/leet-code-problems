const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);

      console.log(node);

      for (let neighbour of graph[node] || []) {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
        }
      }
    }
  }
};

const bfsWithRecursion = (graph, queue, visited) => {
  if (queue.length === 0) return;

  const node = queue.shift();

  if (!visited.has(node)) {
    console.log(node);
    visited.add(node);

    for (let neighbour of graph[node] || []) {
      if (!visited.has(neighbour)) {
        queue.push(neighbour);
      }
    }
  }

  bfsWithRecursion(graph, queue, visited);
};

const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: ['F'],
  F: [],
};

bfsWithRecursion(graph, ['A'], new Set());

const dfs = (graph, start, visited = new Set()) => {
  if (visited.has(start)) return;

  visited.add(start);

  for (let neighbour of graph[start] || []) {
    dfs(graph, neighbour, visited);
  }
};

const dfsWithStack = (graph, start) => {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      for (let neighbour of graph[node] || []) {
        stack.push(neighbour);
      }
    }
  }
};

const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: ['F'],
  F: [],
};

dfsWithStack(graph, 'A');

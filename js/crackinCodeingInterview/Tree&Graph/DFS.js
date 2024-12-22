const dfs = (graph, start, visited = new Set()) => {
  if (visited.has(start)) return;

  visited.add(start);

  for (let neighbour of graph[start] || []) {
    dfs(graph, neighbour, visited);
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

dfs(graph, 'A');

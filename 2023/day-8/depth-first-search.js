class Solution {
  constructor(numVertices) {
    this.adj = Array.from({ length: numVertices }, () => []);
  }

  addEdge(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u);
  }

  DFS(startNode) {
    const visited = new Set();

    this.dfsHelper(startNode, visited);
  }

  dfsHelper(node, visited) {
    visited.add(node);
    console.log(node);

    for (const neighbor of this.adj[node]) {
      if (!visited.has(neighbor)) {
        this.dfsHelper(neighbor, visited);
      }
    }
  }
}

// Example graph
const graph = new Solution(6);
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 4);
graph.addEdge(4, 5);
graph.addEdge(3, 5);
graph.DFS(1);

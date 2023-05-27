// (2) Depth First Traversal for a Graph
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    dfs(startingVertex) {
        const visited = {};
        for (const vertex of this.adjList.keys()) {
            visited[vertex] = false;
        }

        const dfsUtil = (vertex) => {
            visited[vertex] = true;
            console.log(vertex);

            const adjacentVertices = this.adjList.get(vertex);
            for (const adjacentVertex of adjacentVertices) {
                if (!visited[adjacentVertex]) {
                    dfsUtil(adjacentVertex);
                }
            }
        };

        dfsUtil(startingVertex);
    }
}

const graph = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (const vertex of vertices) {
    graph.addVertex(vertex);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log('Depth First Traversal starting from vertex A:');
graph.dfs('A');  
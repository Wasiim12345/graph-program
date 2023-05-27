// (5) JavaScript program to Detect Cycle in a Directed Graph
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
    }

    dfsUtil(v, visited, stack) {
        visited[v] = true;
        stack[v] = true;

        const neighbors = this.adjList.get(v);
        for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
                if (this.dfsUtil(neighbor, visited, stack)) {
                    return true;
                }
            } else if (stack[neighbor]) {
                return true;
            }
        }

        stack[v] = false;
        return false;
    }

    hasCycle() {
        const visited = {};
        const stack = {};

        for (const vertex of this.adjList.keys()) {
            visited[vertex] = false;
            stack[vertex] = false;
        }

        for (const vertex of this.adjList.keys()) {
            if (!visited[vertex]) {
                if (this.dfsUtil(vertex, visited, stack)) {
                    return true;
                }
            }
        }

        return false;
    }
}

const graph = new Graph(4);
const vertices = ['A', 'B', 'C', 'D'];

for (const vertex of vertices) {
    graph.addVertex(vertex);
}

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

const hasCycle = graph.hasCycle();
console.log('Does the graph have a cycle?', hasCycle);  
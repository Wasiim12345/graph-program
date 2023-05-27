// (4) Count number of trees in a forest
class UnionFind {
    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        this.count = 0;

        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
            this.count++;
        }
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return;
        }

        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }

        this.count--;
    }

    getCount() {
        return this.count;
    }
}

function countTreesInForest(edges, n) {
    const uf = new UnionFind(n);

    for (const [u, v] of edges) {
        uf.union(u, v);
    }

    return uf.getCount();
}

const edges = [[0, 1], [0, 2], [3, 4]];
const n = 5;

const treeCount = countTreesInForest(edges, n);
console.log(`Number of trees in the forest: ${treeCount}`);  
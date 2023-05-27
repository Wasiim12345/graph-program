// (3) Count the number of nodes at given level in a tree using BFS
class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

function countNodesAtLevel(root, level) {
    if (!root) {
        return 0;
    }

    const queue = [];
    queue.push(root);

    let currentLevel = 0;
    let nodeCount = 0;

    while (queue.length !== 0) {
        const queueSize = queue.length;

        for (let i = 0; i < queueSize; i++) {
            const currentNode = queue.shift();

            if (currentLevel === level) {
                nodeCount++;
            }

            for (const child of currentNode.children) {
                queue.push(child);
            }
        }

        currentLevel++;

        if (currentLevel > level) {
            break;
        }
    }

    return nodeCount;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

root.children.push(node2);
root.children.push(node3);
node2.children.push(node4);
node2.children.push(node5);
node3.children.push(node6);

const level = 2;
const nodeCount = countNodesAtLevel(root, level);
console.log(`Number of nodes at level ${level}: ${nodeCount}`);  
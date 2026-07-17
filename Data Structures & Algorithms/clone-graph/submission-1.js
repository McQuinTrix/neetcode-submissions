/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const map = new Map();
        const queue = [];
        const clonedNode = new Node(node.val);
        queue.push(node);
        map.set(node, clonedNode);

        while(queue.length > 0) {
            const nodePopped = queue.pop();
            for (let i = 0; i < nodePopped.neighbors.length; i++) {
                const neighbor = nodePopped.neighbors[i];
                if (!map.has(neighbor)) {
                    map.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor);
                } 
                map.get(nodePopped).neighbors.push(map.get(neighbor));
            }
        }

        return map.get(node);
    }
}

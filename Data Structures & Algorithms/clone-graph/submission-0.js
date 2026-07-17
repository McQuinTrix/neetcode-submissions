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

        const mapToTrack = new Map();

        const clonner = function (node) {
            if (mapToTrack.has(node)) {
                return mapToTrack.get(node);
            }

            const clonnedNode = new Node(node.val);
            mapToTrack.set(node, clonnedNode);

            for (let i = 0; i < node.neighbors.length; i++) {
                clonnedNode.neighbors.push(clonner(node.neighbors[i]));
            }

            return clonnedNode;
        }

        return clonner(node);
    }
}

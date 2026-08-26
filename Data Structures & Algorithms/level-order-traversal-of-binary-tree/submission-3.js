/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        const result = [];
        const queue = [root];

        while(queue.length > 0) {
            let size = queue.length;
            let levelQueue = [];
            for (let i = 0; i < size; i++) {
                const pop = queue.shift();
                
                levelQueue.push(pop.val);
                if (pop.left) queue.push(pop.left);
                if (pop.right) queue.push(pop.right);
            }
            result.push(levelQueue);
        }

        return result;
    }
}

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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) {
            return null;
        }
        const queue = [root];
        while(queue.length > 0) {
            const pop = queue.pop();
            let left = pop.left;
            pop.left = pop.right;
            pop.right = left;
            if (pop.left) queue.push(pop.left);
            if (pop.right) queue.push(pop.right);
        }
        return root;
    }
}

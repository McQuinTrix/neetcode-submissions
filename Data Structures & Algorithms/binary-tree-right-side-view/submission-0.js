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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) {
            return [];
        }

        const result = [];
        const queue = [root];

        while (queue.length > 0) {
            const size = queue.length
            for (let i = 0; i < size; i++) {
                let pop = queue.shift();

                if (pop.left) queue.push(pop.left);
                if (pop.right) queue.push(pop.right);

                if (i === size - 1) {
                    result.push(pop.val)
                }
            }
        }

        return result;
    }
}

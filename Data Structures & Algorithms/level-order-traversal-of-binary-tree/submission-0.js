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
        if (!root) {
            return [];
        }
        let res = [];
        let queue = [root];

        while(queue.length > 0) {
            let size = queue.length;
            let levelResult = [];

            for (let i = 0; i < size ; i++) {
                const root = queue.shift();
                levelResult.push(root.val);
                if (root.left) queue.push(root.left);
                if (root.right) queue.push(root.right);
            }

            if (levelResult.length > 0) {
                res.push(levelResult);
            }
        }

        return res;
    }
}

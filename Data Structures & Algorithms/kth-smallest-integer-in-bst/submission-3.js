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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const dfs = (root) => {
            if (!root) {
                return [];
            }

            let stack1 = dfs(root.left);
            let stack2 = dfs(root.right);

            return [
                ...stack1,
                root.val,
                ...stack2,
            ];
        }

        const stack = dfs(root);

        return stack[+k-1];
    }
}

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
        const dfs = (root, stack) => {
            if (!root) {
                return stack;
            }

            let stack1 = root.left ? dfs(root.left) : [];
            let stack2 = root.right ? dfs(root.right) : [];

            return [
                ...stack1,
                root.val,
                ...stack2,
            ];
        }

        const stack = dfs(root, []);

        return stack[+k-1];
    }
}

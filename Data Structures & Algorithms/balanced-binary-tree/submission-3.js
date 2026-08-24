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
     * @return {boolean}
     */
    isBalanced(root) {
        function isBalancedTree(root) {
            if (!root) {
                return [true, 0];
            }
            
            const leftResult = isBalancedTree(root.left);
            const rightResult = isBalancedTree(root.right);

            const isBalanced = leftResult[0] && rightResult[0] && Math.abs(leftResult[1] - rightResult[1]) <= 1;

            return [
                isBalanced,
                1 + Math.max(leftResult[1], rightResult[1])
            ];
        }

        return isBalancedTree(root)[0];
    }
}

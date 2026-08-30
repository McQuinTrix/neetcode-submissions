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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if (!root) {
            return false;
        }

        let currentSum = targetSum - root.val;

        if (!root.left && !root.right && currentSum === 0) {
            return true;
        }

        if (this.hasPathSum(root.left, currentSum) 
            || this.hasPathSum(root.right, currentSum)) {
            return true;
        }

        return false;
    }
}

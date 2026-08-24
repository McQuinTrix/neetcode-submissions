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
    inorderTraversal(root) {
        const result = [];
        function inorder(root) {
            if (!root) return;
            if (root.left) inorder(root.left);
            result.push(root.val);
            if (root.right) inorder(root.right);
        }

        inorder(root);

        return result;
    }
}

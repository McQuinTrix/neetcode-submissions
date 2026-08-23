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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        function findMinVal(root) {
            let curr = root;
            while (curr && curr.left) {
                curr = curr.left;
            }

            return curr;
        }

        function deleteFn(root, val) {
            if (!root) {
                return null;
            }

            if (val > root.val) {
                root.right = deleteFn(root.right, val);
            } else if (val < root.val) {
                root.left = deleteFn(root.left, val);
            } else if (root.val === val) {
                if (!root.right) {
                    return root.left;
                } else if (!root.left){
                    return root.right;
                } else {
                    let minVal = findMinVal(root.right);
                    root.val = minVal.val;
                    root.right = deleteFn(root.right, minVal.val)
                }
            }

            return root;
        }

        return deleteFn(root, key);
    }
}

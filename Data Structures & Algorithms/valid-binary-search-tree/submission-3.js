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
    isValidBST(root) {
        const validate = (root, rangeMin, rangeMax) => {
            if (!root) return true;

            if (root.val <= rangeMin || root.val >= rangeMax) {
                return false;
            }

            return validate(root.left, rangeMin, root.val) 
                    && validate(root.right, root.val, rangeMax)
        }

        return validate(root, -Infinity, Infinity);
    }
}

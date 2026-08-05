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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const treeMaker = (preorder, inorder) => {
            if(!preorder.length || !inorder.length) {
                return null;
            }

            let root = new TreeNode(preorder[0]);
            let midPoint = inorder.indexOf(preorder[0]);
            root.left = treeMaker(preorder.slice(1, midPoint + 1), inorder.slice(0, midPoint));
            root.right = treeMaker(preorder.slice(midPoint + 1), inorder.slice(midPoint + 1))

            return root;
        }

        return treeMaker(preorder, inorder);
    }
}

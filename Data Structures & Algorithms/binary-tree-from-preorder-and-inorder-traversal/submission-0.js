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
        return this.recursive(preorder, inorder)
    }

    recursive (preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0)   return null

        const tree = new TreeNode(preorder[0])

        let cur = 0
        while (preorder[0] !== inorder[cur]) {
            cur++
        }

        let left_pre = preorder.slice(1, cur+1)
        let right_pre = preorder.slice(cur+1)
        let left_in = inorder.slice(0, cur)
        let right_in = inorder.slice(cur+1)
        tree.left = this.recursive(left_pre, left_in)
        tree.right = this.recursive(right_pre, right_in)
        
        return tree
    }
}

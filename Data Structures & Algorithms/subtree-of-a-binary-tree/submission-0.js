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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root)   return false
        if (!subRoot)    return true

        if (this.is_same_dfs(root, subRoot)) {
            return true        
        }  

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
        
    }

    is_same_dfs (p, q) {
        if (!p && !q)   return true
        if (!p || !q || p.val !== q.val)    return false
        return this.is_same_dfs(p.left, q.left) && this.is_same_dfs(p.right, q.right)
    }
}

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
     * @return {number}
     */
    maxDepth(root) {
        return this.bfs(root)
    }

    dfs (root) {
        if (!root) return 0
        return 1 + Math.max(this.dfs(root.left), this.dfs(root.right))
    }

    bfs (root) {
        let q = new Queue();
        if (root)  q.push(root)
        
        let level = 0;
        while (q.size() > 0) {
            let size = q.size()

            for (let i = 0; i < size; i++) {
                let node = q.pop()
                if (node.left)  q.push(node.left)
                if (node.right) q.push(node.right)
            }
            level++
        }
        return level
    }
}

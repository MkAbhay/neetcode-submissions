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
     * @return {number[][]}
     */
    levelOrder(root) {
        return this.bfs(root)
    }

    bfs (root) {
        let res = []
        let q = new Queue();
        if (root)   q.push(root)

        while (q.size()) {
            let curr = []
            let size = q.size()
            for (let i = 0; i < size; i++) {
                let node = q.pop()
                curr.push(node.val)
                if (node.left)   q.push(node.left)
                if (node.right)   q.push(node.right)
            }
            res.push(curr)
        }

        return res
    }
}

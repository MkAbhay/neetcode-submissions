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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        return this.dfs(p, q)
    }

    bfs (p, q) {
        let q1 = new Queue();
        if (p)   q1.push(p)
        let q2 = new Queue();
        if (q)   q2.push(q)

        while (q1.size() > 0 || q2.size() > 0) {
            let size1 = q1.size()
            let size2 = q2.size()

            for (let i = 0; i < Math.max(size1, size2); i++) {
                let cur1 = q1.pop()
                let cur2 = q2.pop()

                if (!cur1 && !cur2)    continue;

                if (!cur1 || !cur2  || cur1.val !== cur2.val)   return false

                q1.push(cur1.left)
                q1.push(cur1.right)
                q2.push(cur2.left)
                q2.push(cur2.right)
            }
        }

        return true
    }

    dfs (p, q) {
        if (!p && !q) return true
        if (!p || !q  || p.val !== q.val)   return false

        return this.dfs(p.left, q.left) && this.dfs(p.right, q.right)
    }
}

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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        return this.dfs_array(root, k)
    }

    dfs (root, k) {
        let arr = [ k, null]
        traversal(root, arr)
        return arr[1]

        function traversal (root, arr) {
            if (!root)  return
            traversal(root.left, arr)
            arr[0]--
            if (arr[0] === 0) {
                arr[1] = root.val
                return
            }
            traversal(root.right, arr)
        }
    }

    dfs_array (root, k) {
        let arr = []
        traversal(root, arr)
        arr.sort((a, b) => b - a)
        return arr[arr.length - k]

        function traversal (root, arr) {
            if (!root)  return
            traversal(root.left, arr)
            arr.push(root.val)
            traversal(root.right, arr)
        };
    }
}

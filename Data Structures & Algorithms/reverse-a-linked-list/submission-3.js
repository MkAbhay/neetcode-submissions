/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let reverse = null;

        while(head) {
            let temp = new ListNode(head.val)
            temp.next = reverse
            reverse = temp
            head = head.next
        }

        return reverse
    }
}

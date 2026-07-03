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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let forward_head = null
        let backward_head = null

        while (n>0) {
            forward_head = forward_head ? forward_head.next : head
            n--
        }
        while (forward_head && forward_head.next) {
            forward_head = forward_head.next
            backward_head = backward_head ? backward_head.next : head
        }

        if (backward_head)  backward_head.next = backward_head.next.next
        else {
            if (!head.next)     head = null
            else    head = head.next
        }

        return head
    }
}

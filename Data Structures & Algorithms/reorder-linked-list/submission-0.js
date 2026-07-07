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
     * @return {void}
     */
    reorderList(head) {
        // find middle
        let slow = head
        let fast = head
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        } 
        let second = slow.next
        slow.next = null

        // reverse second
        let prev = null
        while (second) {
            let temp = second.next
            second.next = prev
            prev = second
            second = temp
        }
        
        let first = head
        second = prev
        let dummy = new ListNode()
        let tail = dummy
        
        while (second) {
            let first_next = first.next
            let second_next = second.next

            tail.next = first
            tail = tail.next
            tail.next = second
            tail = tail.next

            first = first_next
            second = second_next
        }

        if (first)  tail.next = first;

        return dummy.next
    }
}

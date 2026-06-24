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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const l3 = new ListNode();
        let carry = 0;
        let head_l1 = l1
        let head_l2 = l2
        let head_l3 = l3
        while (head_l1 || head_l2) {
            let sum = (head_l1?.val ?? 0) + (head_l2?.val ?? 0) + carry;
            let last_digit = sum % 10;
            carry = sum > 9 ? 1 : 0;

            head_l3.val = last_digit;
            head_l3.next = (head_l1?.next || head_l2?.next) ? new ListNode() : carry ? new ListNode(1, null) : null

            head_l1 = head_l1?.next ?? null
            head_l2 = head_l2?.next ?? null
            head_l3 = head_l3?.next
        }
        return l3
    }
}

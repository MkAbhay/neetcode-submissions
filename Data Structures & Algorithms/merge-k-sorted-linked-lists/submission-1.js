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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null; 

        let res = lists
        while (res.length > 1) {
            let merge_list_array = []
            for (let i = 0; i < res.length; i += 2) {
                let list1 = res[i]
                let list2 = res[i+1] ? res[i+1] : null
                merge_list_array.push(this.merge_list(list1, list2))
            }
            res = merge_list_array
        }

        return res[0]
    }

    merge_list (list1, list2) {
        let dummy = new ListNode()
        let tail = dummy

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                tail.next = list1
                list1 = list1.next
            } else {
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }

        if (list1)  tail.next = list1
        if (list2)  tail.next = list2

        return dummy.next
    }
}

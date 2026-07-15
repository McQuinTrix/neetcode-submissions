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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newListHead = null;
        let prevListItem = null;
        let currList1 = list1;
        let currList2 = list2;

        while(currList1 && currList2) {
            let nextItem = null;
            if (currList1.val < currList2.val) {
                nextItem = currList1;
                currList1 = currList1.next;
            } else {
                nextItem = currList2;
                currList2 = currList2.next;
            }

            if (!newListHead) {
                newListHead = nextItem;
                prevListItem = nextItem;
            } else {
                prevListItem.next = nextItem;
                prevListItem = nextItem;
            }
        }

        let moreItems = currList1 ? currList1 : currList2;

        if (!prevListItem) {
            newListHead = moreItems;
            prevListItem = moreItems;
        } else {
            prevListItem.next = moreItems;
        }

        return newListHead;
    }
}

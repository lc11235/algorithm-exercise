//给定一个单链表，判断链表是否有环，有环则返回环开始的节点，没环则返回null
//不使用额外的空间
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    var slow = head, fast = head;
    while (true) {
        if (fast === null || fast.next === null) {
            return null;
        }
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (true) {
                if (slow === fast) {
                    return slow;
                }
                slow = slow.next;
                fast = fast.next;
            }
        }

    }
};
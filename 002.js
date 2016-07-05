//给出两个非负数字的单链表，数字以相反的顺序存储在单链表中，每个链表节点
//包含单个数字，将对应链表的节点相加，并返回一个相加后各个节点数字的链表。
//input:(2->4->3) + (5->6->4)
//output:7->0->8
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1, q = l2, curr = dummyHead;
    var carry = 0;
    while (p !== null || q !== null) {
        var x = (p !== null) ? p.val : 0;
        var y = (q !== null) ? q.val : 0;
        var sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};

//给定一个单向链表，移除倒数第n个节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var start = new ListNode(0);
    var slow = start, fast = start;
    slow.next = head;
    fast.next = head;
    if(head.next ===null) return [];
    //使用快慢指针法，将快指针先移动n个节点，然后两个节点同时移动
    //快节点移动到末尾，慢节点移动到距离末尾倒数n个节点的地方
    for(var i=0;i<n;i++){
        fast = fast.next;
    }
    
    while(fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return start.next;
};
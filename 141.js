//给定一个单链表，判断链表是否有环。
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
 * @return {boolean}
 */
var hasCycle = function(head) {
      var slow = head,fast = head;
      while(true){
          if(fast === null || fast.next === null){
             return false;
            }
         slow = slow.next;        
         fast = fast.next.next;
         if(slow === fast){
             return true;
         }
     }
 };

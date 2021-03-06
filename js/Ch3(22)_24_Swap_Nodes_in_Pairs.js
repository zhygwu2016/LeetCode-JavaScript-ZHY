/*
24. Swap Nodes in Pairs
https://leetcode.com/problems/swap-nodes-in-pairs/description/

Given a linked list, swap every two adjacent nodes and return its head.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.

Note:
Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

/*
Solution:
Let’s assume p, q, r are the current, next, and next’s next node.
We could swap the nodes pairwise by adjusting where it’s pointing next:
q.next = p;
p.next = r;
The above operations transform the list from { p → q → r → s } to { q → p → r → s }.
If the next pair of nodes exists, we should remember to connect p’s next to s. Therefore,
we should record the current node before advancing to the next pair of nodes.
To determine the new list’s head, you look at if the list contains two or more elements.
Basically, these extra conditional statements could be avoided by inserting an extra node
(also known as the dummy head) to the front of the list.
*/

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
var swapPairs = function(head) {
  var dummy = new ListNode(0);
  dummy.next = head;
  var p = head;
  var prev = dummy;
  while(p!=null && p.next!=null){
    var q = p.next, r = p.next.next;
    prev.next = q;
    q.next = p;
    p.next = r;
    prev = p;
    p = r;
  }
  return dummy.next;
};

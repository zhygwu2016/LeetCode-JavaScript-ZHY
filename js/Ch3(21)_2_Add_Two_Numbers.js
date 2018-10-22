/*
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/description/

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/*
Solution:
Keep track of the carry using a variable and simulate digits-by-digits sum from the head
of list, which contains the least-significant digit.
Take extra caution of the following cases:
- When one list is longer than the other.
- The sum could have an extra carry of one at the end, which is easy to forget.
  (e.g.,(9 → 9) + (1) = (0 → 0 → 1))

The pseudocode is as following:
  · Initialize current node to dummy head of the returning list.
  · Initialize carry to 0.
  · Initialize p and q to head of l1 and l2 respectively.
  · Loop through lists l1 and l2 until you reach both ends.
        Set x to node p's value. If p has reached the end of l1, set to 0.
        Set y to node q's value. If q has reached the end of l2, set to 0.
        Set sum=x+y+carry.
        Update carry=sum/10.
        Create a new node with the digit value of (summod10) and set it to current node's next,
          then advance current node to next.
        Advance both p and q.
  · Check if carry=1, if so append a new node with digit 1 to the returning list.
  · Return dummy head's next node.
*/

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
var addTwoNumbers = function(l1, l2) {
  var dummyHead = new ListNode(0);
  var p=l1, q=l2, curr=dummyHead;
  var carry=0;

  while(p!=null||q!=null){
    var x = (p!=null) ? p.val : 0;
    var y = (q!=null) ? q.val : 0;
    var digit = x + y + carry;
    //carry = parseInt(digit/10);
    carry = Math.floor(digit/10);
    curr.next = new ListNode(digit%10);
    curr = curr.next;
    if(p!=null) p = p.next;
    if(q!=null) q = q.next;
  }

  if(carry>0){
    curr.next = new ListNode(carry);
  }

  return dummyHead.next;
};

/*
Complexity Analysis

Time complexity :
O(max(m,n)). Assume that m and n represents the length of l1 and l2 respectively,
the algorithm above iterates at most max(m,n) times.

Space complexity :
O(max(m,n)). The length of the new list is at most max(m,n)+1.
*/

/*
Chapter 3: Linked List

21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/description/

Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/* 1.Iteration
Solution:
We insert a dummy head before the new list so we don’t have to deal with special cases
such as initializing the new list’s head. Then the new list’s head could just easily be
returned as dummy head’s next node.
Using dummy head allows you to write simpler code and adds as a powerful tool to your
interview arsenal. To see more examples of dummy head usage, please see these
questions: [21. Add Two Numbers], [22. Swap Nodes in Pairs], and [23. Merge K Sorted
Linked Lists].

Complexity Analysis
Time complexity : O(n+m)
Because exactly one of l1 and l2 is incremented on each loop iteration, the while loop
runs for a number of iterations equal to the sum of the lengths of the two lists.
All other work is constant, so the overall complexity is linear.

Space complexity : O(1)
The iterative approach only allocates a few pointers, so it has a constant
overall memory footprint.
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
var mergeTwoLists = function(l1, l2) {
  var dummyHead = new ListNode(-1);
  var prev = dummyHead;

  while(l1!=null && l2!=null){
    if(l1.val<=l2.val){
      prev.next = l1;
      l1 = l1.next;
    }else{
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  if(l1==null) prev.next = l2;
  if(l2==null) prev.next = l1;

  return dummyHead.next;
};


// 2. Recursion
/*
We can recursively define the result of a merge operation on two lists as
the following (avoiding the corner case logic surrounding empty lists):
  list1[0]+merge(list1[1:],list2)   list1[0]<list2[0]
  list2[0]+merge(list1,list2[1:])   otherwise
Namely, the smaller of the two lists' heads plus the result of a merge
on the rest of the elements.

Algorithm:
We model the above recurrence directly, first accounting for edge cases.
Specifically, if either of l1 or l2 is initially null, there is no merge to perform,
so we simply return the non-null list. Otherwise, we determine which of l1 and l2
has a smaller head, and recursively set the next value for that head to the
next merge result. Given that both lists are null-terminated, the recursion will
eventually terminate.

Complexity Analysis:

Time complexity : O(n+m)
Because each recursive call increments the pointer to l1 or l2 by one
(approaching the dangling null at the end of each list), there will be exactly
one call to mergeTwoLists per element in each list. Therefore, the time complexity
is linear in the combined size of the lists.

Space complexity :  O(n+m)
The first call to mergeTwoLists does not return until the ends of both l1 and l2
have been reached, so n+m stack frames consume O(n+m) space.
*/

var mergeTwoLists = function(l1, l2) {
  if(l1==null){
    return l2;
  }else if(l2==null){
    return l1;
  }else if(l1.val<l2.val){
    l1.next = mergeTwoLists(l1.next,l2);
    return l1;
  }else{
    l2.next = mergeTwoLists(l1,l2.next);
    return l2;
  }
};

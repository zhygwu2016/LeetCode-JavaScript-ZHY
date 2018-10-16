/*
109. Convert Sorted List to Binary Search Tree
https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/

Given a singly linked list where elements are sorted in ascending order,
convert it to a height balanced BST.
For this problem, a height-balanced binary tree is defined as a binary tree in which
the depth of the two subtrees of every node never differ by more than 1.

Example:
Given the sorted linked list: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {

};

var list;

var helper = function(start, end){
  if (start > end) return null;
  var mid = Math.floor( (start + end) / 2 );
  var leftChild = helper(start, mid-1);
  var parent = new TreeNode(list.val);
  parent.left = leftChild;
  list = list.next;
  parent.right = helper(mid+1, end);
  return parent;
};

var sortedListToBST = function(head) {
  var n = 0;
  var p = head;
  while (p != null) {
    p = p.next;
    n++;
  }
  list = head;
  return helper(0, n - 1);
};

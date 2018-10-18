/*
Chapter 4: Binary Tree

98. Validate Binary Search Tree
https://leetcode.com/problems/validate-binary-search-tree/description/

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:
  · The left subtree of a node contains only nodes with keys less than the node's key.
  · The right subtree of a node contains only nodes with keys greater than the node's key.
  · Both the left and right subtrees must also be binary search trees.

  Example 1:
  Input:
      2
     / \
    1   3
  Output: true

  Example 2:

      5
     / \
    1   4
       / \
      3   6
  Output: false
  Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
               is 5 but its right child's value is 4.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

};

/*
Solution:

First, you must understand the difference between Binary Tree and BST. Binary tree is a
tree data structure in which each node has at most two child nodes. A BST is based on
binary tree, but with the following additional properties:
  - The left subtree of a node contains only nodes with keys less than the node’s key.
  - The right subtree of a node contains only nodes with keys greater than the node’s
    key.
  - Both the left and right subtrees must also be binary search trees.

People who do not understand the definition of BST may give the following algorithm:
Assume that the current node’s value is k. Then for each node, check if the left node’s
value is less than k and the right node’s value is greater than k. If all of the nodes satisfy
this property, then it is a BST.
It sounds correct and convincing, but look at this counter example below: A sample tree
that we name it as binary tree (1).

     10
    / \
   5  15   -------- binary tree (1)
     / \
    6  20

It’s obvious that this is not a valid BST, since (6) could never be on the right of (10).
*/

// 1. Brute force O(n^2) runtime, O(n) stack space
/*
Based on BST’s definition, we can easily devise a brute force solution:
Assume that the current node’s value is k. Then for each node, check if all nodes of left
subtree contain values that are less than k. Also check if all nodes of right subtree contain
values that are greater than k. If all of the nodes satisfy this property, then it must be a
BST.
Below is the brute force code that is inefficient:

The worst case runtime complexity is O(n^2) for the brute force algorithm, when the tree
degenerates into a linked list with n nodes.
*/
var isValidBST = function(root) {
  if (root == null) return true;
  return isSubtreeLessThan(root.left, root.val) &&
         isSubtreeGreaterThan(root.right, root.val) &&
         isValidBST(root.left) && isValidBST(root.right);
};

function isSubtreeLessThan(p, val){
  if (p == null) return true;
  return p.val < val &&
         isSubtreeLessThan(p.left, val) &&
         isSubtreeLessThan(p.right, val);
}

function isSubtreeGreaterThan(p, val){
  if (p == null) return true;
  return p.val > val &&
         isSubtreeGreaterThan(p.left, val) &&
         isSubtreeGreaterThan(p.right, val);
}

// 2. Top-down recursion - O(n) runtime, O(n) stack space
/*
Here is the much better solution. We can avoid examining all nodes of both subtrees in
each pass by passing down the low and high limits from the parent to its children.
Refer back to the binary tree (1) above. As we traverse down the tree from node (10) to
right node (15), we know for sure that the right node’s value fall between 10 and +∞.
Then, as we traverse further down from node (15) to left node (6), we know for sure that
the left node’s value fall between 10 and 15. And since (6) does not satisfy the above
requirement, we can quickly determine it is not a valid BST.

public boolean isValidBST(TreeNode root) {
  return valid(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}
private boolean valid(TreeNode p, int low, int high) {
  if (p == null) return true;
  return p.val > low && p.val < high
        && valid(p.left, low, p.val)
        && valid(p.right, p.val, high);
}

This algorithm runs in O(n) time, where n is the number of nodes of the binary tree.
Sharp readers may notice that the above code does not work if the tree contains the
smallest or the largest integer value. How could we fix this? One way to fix this is to use
null to represent the infinity.
*/
var isValidBST = function(root) {
  return valid(root, -Infinity, Infinity);
};

function valid(p, low, high){
  if(p == null) return true;
  return p.val>low && p.val<high &&
         valid(p.left, low, p.val) &&
         valid(p.right, p.val, high);
}

// Using null to replace Infinity
var isValidBST = function(root) {
  return valid(root, null, null);
};
function valid(p, low, high){
  if(p == null) return true;
  return (low == null || p.val>low) && (high == null || p.val<high) &&
         valid(p.left, low, p.val) &&
         valid(p.right, p.val, high);
}


// 3. In-order traversal - O(n) runtime, O(n) stack space
/*
Another solution is to do an in-order traversal of the binary tree, and verify that its inorder
elements follow a strict monotonic increasing order. During the in-order traversal,
we verify that the previous value is less than the current node’s value. The runtime
complexity is also O(n).
*/
// https://www.youtube.com/watch?v=gm8DUJJhmY4
var prev;
var isValidBST = function(root) {
  prev = null;
  return isMonotonicIncreasing(root);
};

function isMonotonicIncreasing(p){
  if (p==null) return true;
  if (isMonotonicIncreasing(p.left)) {
    if (prev != null && p.val <= prev.val) return false;
    prev = p;
    return isMonotonicIncreasing(p.right);
  }
  return false;
}

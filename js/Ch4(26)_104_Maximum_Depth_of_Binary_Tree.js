/*
104. Maximum Depth of Binary Tree
https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node
down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
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
 * @return {number}
 */
var maxDepth = function(root) {

};

/*
Solution:
The maximum height of a binary tree is defined as the number of nodes along the path
from the root node to the deepest leaf node. Note that the maximum depth of an empty
tree is 0.
O(n) runtime, O(log n) space – Recursion:
We could solve this easily using recursion, because each of the left child and right child
of a node is a sub-tree itself. We first compute the max height of left sub-tree, and then
compute the max height of right sub-tree. The maximum depth of the current node is the
greater of the two maximums plus one. For the base case, we look at a tree that is empty,
which we return 0.
Assume that n is the total number of nodes in the tree. The runtime complexity is O(n)
because it traverse each node exactly once. As the maximum depth of a binary tree is
O(log n), the extra space cost is O(log n) due to the extra stack space used by the
recursion.
*/
var maxDepth = function(root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

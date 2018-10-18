/*
156. Binary Tree Upside Down
https://leetcode.com/problems/binary-tree-upside-down/description/

Given a binary tree where all the right nodes are either leaf nodes with a sibling
 (a left node that shares the same parent node) or empty, flip it upside down and
turn it into a tree where the original right nodes turned into left leaf nodes.
Return the new root.

Example:

Input: [1,2,3,4,5]

    1
   / \
  2   3
 / \
4   5

Output: return the root of the binary tree [4,5,2,#,#,3,1]

   4
  / \
 5   2
    / \
   3   1
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
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {

};

/*
Solution:
At each node you want to assign:
  p.left = parent.right;
  p.right = parent;
*/

// 1. Top down approach:
/*
We need to be very careful when reassigning current node’s left and right children.
Besides making a copy of the parent node, you would also need to make a copy of the
parent’s right child too. The reason is the current node becomes the parent node in the
next iteration.
*/
var upsideDownBinaryTree = function(root) {
  var p = root, parent = null, parentRight = null;
  while(p != null){
    var left = p.left;
    p.left = parentRight;
    parentRight = p.right;
    p.right = parent;
    parent = p;
    p = left;
  }
  return parent;
};
/*The above code is actually very similar to the algorithm in reversing a linked list.*/



// 2. Bottom up approach:
/*
Although the code for the top-down approach seems concise, it is actually subtle and
there are a lot of hidden traps if you are not careful. The other approach is thinking
recursively in a bottom-up fashion. If we reassign the bottom-level nodes before the
upper ones, we won’t have to make copies and worry about overwriting something. We
know the new root will be the left-most leaf node, so we begin the reassignment here.
*/
var upsideDownBinaryTree = function(root) {
  return dfsBottomUp(root, null);
};

function dfsBottomUp(p, parent){
  if (p==null) return parent;
  var root = dfsBottomUp(p.left, p);
  p.left = (parent==null)? parent : parent.right;
  p.right = parent;
  return root;
}

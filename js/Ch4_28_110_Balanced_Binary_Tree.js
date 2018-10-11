/*
110. Balanced Binary Tree
https://leetcode.com/problems/balanced-binary-tree/description/

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:
  a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:
  Given the following tree [3,9,20,null,null,15,7]:

      3
     / \
    9  20
      /  \
     15   7
  Return true.

Example 2:
  Given the following tree [1,2,2,3,3,null,null,4,4]:

         1
        / \
       2   2
      / \
     3   3
    / \
   4   4
  Return false.
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
var isBalanced = function(root) {

};

// 1. O(n2) runtime, O(n) stack space – Brute force top-down recursion:
/*
We could devise a brute force algorithm directly based on the above definition. We also
reused the [Recursion] approach to find the maximum depth of a subtree. The brute force
algorithm worst case runtime complexity is O(n2) when the input tree is degenerated.
*/
var isBalanced = function(root) {
  if (root==null) return true;
  return Math.abs(maxDepth(root.left)-maxDepth(root.right)) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right);
};

function maxDepth(root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// 2. O(n) runtime, O(n) stack space – Bottom-up recursion:
/*
It seems that the above approach is recalculating max depth repeatedly for each node. We
could avoid the recalculation by passing the depth bottom-up. We use a sentinel value –1
to represent that the tree is unbalanced so we could avoid unnecessary calculations.

In each step, we look at the left subtree’s depth (L), and ask: “Is the left subtree
unbalanced?” If it is indeed unbalanced, we return –1 right away. Otherwise, L represents
the left subtree’s depth. We then repeat the same process for the right subtree’s depth (R).

We calculate the absolute difference between L and R. If the subtrees’ depth difference is
less than one, we could return the height of the current node, otherwise return –1 meaning
the current tree is unbalanced.
*/
var isBalanced = function(root) {
  return maxDepth(root) != -1;
};

function maxDepth(root) {
  if (root == null) return 0;
  var L = maxDepth(root.left);
  if(L==-1) return -1;
  var R = maxDepth(root.right);
  if(R==-1) return -1;
  return (Math.abs(L-R) <=1) ? (Math.max(L,R)+1) : -1;
}

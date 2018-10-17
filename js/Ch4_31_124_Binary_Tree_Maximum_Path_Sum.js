/*
124. Binary Tree Maximum Path Sum
https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

Given a non-empty binary tree, find the maximum path sum.
For this problem, a path is defined as any sequence of nodes from some starting node
to any node in the tree along the parent-child connections.
The path must contain at least one node and does not need to go through the root.

Example 1:
Input: [1,2,3]

       1
      / \
     2   3

Output: 6

Example 2:
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

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
var maxPathSum = function(root) {

};

/*
Example Questions Candidate Might Ask:
Q: What if the tree is empty?
A: Assume the tree is non-empty.
Q: How about a tree that contains only a single node?
A: Then the maximum path sum starts and ends at the same node.
Q: What if every node contains negative value?
A: Then you should return the single node value that is the least negative.
Q: Does the maximum path have to go through the root node?
A: Not necessarily. For example, the below tree yield 6 as the maximum path sum and does not
go through root.

     -5
    / \
   2  3
     / \
   -1   4

Hint:
Anytime when you found that doing top down approach uses a lot of repeated
calculation, bottom up approach usually is able to be more efficient.

         _____Node____
       /              \
      /                \
left subtree       right subtree

Try the bottom up approach. At each node, the potential maximum path could be one of
these cases:
  i. max(left subtree) + node
  ii. max(right subtree) + node
  iii. max(left subtree) + max(right subtree) + node
  iv. the node itself

Then, we need to return the maximum path sum that goes through this node and to either
one of its left or right subtree to its parent. There’s a little trick here: If this maximum
happens to be negative, we should return 0, which means: “Do not include this subtree as
part of the maximum path of the parent node”, which greatly simplifies our code.
*/

var maxSum;

var maxPathSum = function(root) {
  maxSum = -Infinity;
  findMax(root);
  return maxSum;
};

function findMax(p){
  if(p==null) return 0;
  var left = findMax(p.left);
  var right = findMax(p.right);
  maxSum = Math.max(p.val + left + right, maxSum);
  var ret = p.val + Math.max(left, right);
  return ret>0 ? ret : 0;
}

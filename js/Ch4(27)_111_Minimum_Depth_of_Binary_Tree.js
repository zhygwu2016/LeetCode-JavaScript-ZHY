/*
111. Minimum Depth of Binary Tree
https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node
down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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
var minDepth = function(root) {

};

// 1. Depth-first traversal - O(n) runtime, O(log n) space
/*
Similar to the [Recursion] approach to find the maximum depth, but make sure you
consider these cases:
  i.  The node itself is a leaf node. The minimum depth is one.
  ii. Node that has one empty sub-tree while the other one is non-empty. Return
      the minimum depth of that non-empty sub-tree.
*/
var minDepth = function(root) {
  if (root == null) return 0;
  if (root.left == null) return minDepth(root.right) + 1;
  if (root.right == null) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// 2. Breadth-first traversal - O(n) runtime, O(n) space
/*
Note that the previous approach traverses all the nodes even for a highly unbalanced tree.
In fact, we could optimize this scenario by doing a breadth-first traversal (also known as
level-order traversal). When we encounter the first leaf node, we immediately stop the
traversal.
We also keep track of the current depth and increment it when we reach the end of level.
We know that we have reached the end of level when the current node is the right-most
node.
Compared to the recursion approach, the breadth-first traversal works well for highly
unbalanced tree because it does not need to traverse all nodes. The worst case is when the
tree is a full binary tree with a total of n nodes. In this case, we have to traverse all nodes.
The worst case space complexity is O(n), due to the extra space needed to store current
level nodes in the queue.
*/
var minDepth = function(root) {
  if(root == null) return 0;
  var queue = [];
  queue.push(root);
  var rightMost = root;
  var depth = 1;
  while(queue.length !== 0){
    var node = queue.shift();
    if(node.left == null && node.right == null) break;
    if(node.left !== null) queue.push(node.left);
    if(node.right !== null) queue.push(node.right);
    if(node == rightMost){
      depth++;
      rightMost = (node.right!=null)? node.right : node.left;
    }
  }
  return depth;
};

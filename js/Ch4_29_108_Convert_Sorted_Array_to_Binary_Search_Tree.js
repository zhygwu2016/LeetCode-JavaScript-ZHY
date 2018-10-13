/*
108. Convert Sorted Array to Binary Search Tree
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
For this problem, a height-balanced binary tree is defined as a binary tree in which
the depth of the two subtrees of every node never differ by more than 1.

Example:
Given the sorted array: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

};

// Divide and conquer - O(n) runtime, O(log n) stack space
/*
If you would have to choose an array element to be the root of a balanced BST, which
element would you pick? The root of a balanced BST should be the middle element from
the sorted array.
You would pick the middle element from the sorted array in each iteration. You then
create a node in the tree initialized with this element. After the element is chosen, what is
left? Could you identify the sub-problems within the problem?
There are two arrays left — The one on its left and the one on its right. These two arrays
are the sub-problems of the original problem, since both of them are sorted. Furthermore,
they are subtrees of the current node’s left and right child.
The code below creates a balanced BST from the sorted array in O(n) time (n is the
number of elements in the array). Compare how similar the code is to a binary search
algorithm. Both are using the divide and conquer methodology. Because the input array
could be subdivided in at most log(n) times, the extra stack space used by the recursion is
in O(log n).
*/
var sortedArrayToBST = function(nums) {
  if (!nums) return null;
  return helper(nums, 0, nums.length-1);
};

function helper(arr, start, end){
  if (start > end) return null;
  var mid = Math.floor((start+end)/2);
  var node = new TreeNode(arr[mid]);
  node.left = helper(arr, start, mid-1);
  node.right = helper(arr, mid+1, end);
  return node;
}

// closure
var sortedArrayToBST = function(nums) {
  if (!nums) return null;

  const helper = (start, end) => {
    if (start > end) return null;

    const mid = Math.floor((start+end)/2);
    const node = new TreeNode(nums[mid]);

    node.left = helper(start, mid-1);
    node.right = helper(mid+1, end);
    
    return node;
  };

  return helper(0, nums.length-1);
};

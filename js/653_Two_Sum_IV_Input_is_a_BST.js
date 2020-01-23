/*
653. Two Sum IV - Input is a BST
Given a Binary Search Tree and a target number, 
return true if there exist two elements in the BST 
such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7
Target = 9
Output: True
 
Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7
Target = 28
Output: False
*/

/*
Approach #1 Using HashSet[Accepted]
The simplest solution will be to traverse over the whole tree and 
consider every possible pair of nodes to determine if they can form 
the required sum k. But, we can improve the process if we look at a little 
catch here.
If the sum of two elements x+y equals k, and we already know that 
x exists in the given tree, we only need to check if an element 
y exists in the given tree, such that y=k−x. Based on this simple catch, 
we can traverse the tree in both the directions(left child and right child) at every step. 
We keep a track of the elements which have been found so far during the tree traversal, 
by putting them into a set.
For every current node with a value of p, we check if k−p already exists in the array. 
If so, we can conclude that the sum k can be formed by using the two elements 
from the given tree. Otherwise, we put this value p into the set.
If even after the whole tree's traversal, no such element p can be found, the sum 
k can't be formed by using any two elements.
*/
var findTarget = function(root, k) {
    let set = new Set();
    return dfs(root, k);
    
    function dfs(root){
        if (!root) {
            return false;
        }
        if (set.has(k-root.val)){
            return true;
        }
        set.add(root.val);
        return dfs(root.left) || dfs(root.right);
    }
};
/*
Complexity Analysis
Time complexity : 
O(n). The entire tree is traversed only once in the worst case. Here, 
n refers to the number of nodes in the given tree.
Space complexity : 
O(n). The size of the set can grow upto n in the worst case.
*/

/*
Approach #2 Using BFS and HashSet [Accepted]
In this approach, the idea of using the set is the same as in the last approach. 
But, we can carry on the traversal in a Breadth First Search manner, which is 
a very common traversal method used in Trees. The way BFS is used can be 
summarized as given below. We start by putting the root node into a queue. 
We also maintain a set similar to the last approach. Then, at every step, 
we do as follows:
1. Remove an element, p, from the front of the queue.
2. Check if the element k−p already exists in the set. If so, return True.
3. Otherwise, add this element, p to the set. Further, add the right and 
the left child nodes of the current node to the back of the queue.
4. Continue steps 1. to 3. till the queue becomes empty.
5. Return false if the queue becomes empty.
By following this process, we traverse the tree on a level by level basis.
*/
//Approach #2 Using BFS and HashSet
var findTarget = function(root, k) {
  let set = new Set();
  let queue = [root];
  
  while(queue.length > 0){
      let p  = queue.shift();    
      if (set.has(k - p.val)){
          return true;
      }
      set.add(p.val);
      if(p.left) queue.push(p.left);
      if(p.right) queue.push(p.right);
  }
  
  return false;
};
var findTarget = function(root, k) {
    let map = {};
    let queue = [root];
  
    while(queue.length > 0){
        let p  = queue.shift();    
        if (map[k - p.val] === true) return true;
        map[p.val] = true;
        if(p.left) queue.push(p.left);
        if(p.right) queue.push(p.right);
    }
  
    return false;
};
/*
Complexity Analysis
Time complexity : 
O(n). We need to traverse over the whole tree once in the worst case. Here, 
n refers to the number of nodes in the given tree.
Space complexity : 
O(n). The size of the set can grow atmost upto n.
*/

/*
Approach #3 Using BST [Accepted]
In this approach, we make use of the fact that the given tree is a 
Binary Search Tree. Now, we know that the inorder traversal of a BST 
gives the nodes in ascending order. Thus, we do the inorder traversal of 
the given tree and put the results in a list which contains the nodes 
sorted in ascending order.
Once this is done, we make use of two pointers 
l and r pointing to the beginning and the end of the sorted list. Then...(略)
*/
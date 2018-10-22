/*
Chapter 6: Misc

54. Spiral Matrix
https://leetcode.com/problems/spiral-matrix/description/

Given a matrix of m x n elements (m rows, n columns),
return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

};
/*
Solution:
We simulate walking the matrix from the top left corner in a spiral manner. In the
outmost level, we traverse n steps right, m – 1 steps down, n – 1 steps left, and m – 2
steps up, then we continue traverse into its next inner level.
As the traversal spiral toward the matrix’s center, we stop by determining if we have
reached the “center”. However, defining the “center” is difficult since the matrix is not
We simulate walking the matrix from the top left corner in a spiral manner. In the
outmost level, we traverse n steps right, m – 1 steps down, n – 1 steps left, and m – 2
steps up, then we continue traverse into its next inner level.
As the traversal spiral toward the matrix’s center, we stop by determining if we have
reached the “center”. However, defining the “center” is difficult since the matrix is not
*/
var spiralOrder = function(matrix) {
  var elements = [];
  if (matrix.length == 0) return elements;
  var m = matrix.length, n = matrix[0].length;
  var row = 0, col = -1;
  while(true){
    for(let i = 0; i<n; i++){
      elements.push(matrix[row][++col]);
    }
    if (--m == 0) break;
    for(let i = 0; i<m; i++){
      elements.push(matrix[++row][col]);
    }
    if (--n == 0) break;
    for(let i = 0; i<n; i++){
      elements.push(matrix[row][--col]);
    }
    if (--m == 0) break;
    for(let i = 0; i<m; i++){
      elements.push(matrix[--row][col]);
    }
    if (--n == 0) break;
  }
  return elements;
};

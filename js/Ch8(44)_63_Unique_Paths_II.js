/*
63. Unique Paths II
https://leetcode.com/problems/unique-paths-ii/description/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {

};

/*
Solution:
O(mn) runtime, O(mn) space – Dynamic programming:
It turns out to be really easy to extend from the [Bottom-up dynamic programming]
approach above. Just set the total paths to 0 when you encounter an obstacle.
*/
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length;
  if(m == 0) return 0;
  var n = obstacleGrid[0].length;
  var mat = new Array(m+1);
  for (let i = 0; i < m+1; i++) {
    mat[i] = new Array(n+1).fill(0);
  }
  mat[m - 1][n] = 1;
  for(var r = m-1; r>=0; r--){
    for(var c = n-1; c>=0; c--){
      mat[r][c] = (obstacleGrid[r][c] == 1) ? 0 : mat[r + 1][c] + mat[r][c + 1];
    }
  }
  return mat[0][0];
};


// 左上角到右下角
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length;
  if(m == 0) return 0;
  var n = obstacleGrid[0].length;

  var mat = new Array(m+1);
  for (let i = 0; i < m+1; i++) {
    mat[i] = new Array(n+1).fill(0);
  }
  mat[1][0] = 1;

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
        mat[i][j] = (obstacleGrid[i-1][j-1] == 1) ? 0 : mat[i-1][j] + mat[i][j-1];
    }
  }
  return mat[m][n];
};

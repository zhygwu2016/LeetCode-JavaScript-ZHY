/*
62. Unique Paths
https://leetcode.com/problems/unique-paths/description/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

};


/*
O(C(m+n,m)) runtime, O(m + n) space – Backtracking:
The most direct way is to write code that traverses each possible path, which can be done
using backtracking. When you reach row = m and col = n, you know you’ve reached the
bottom-right corner, and there is one additional unique path to it. However, when you
reach row > m or col > n, then it’s an invalid path and you should stop traversing. For any
grid at row = r and col = c, you have two choices: Traverse to the right or traverse to the
bottom. Therefore, the total unique paths at grid (r, c) are equal to the sum of total unique
paths from the grid to the right and the grid below.
Deriving the runtime complexity is slightly tricky. Observe that the robot must go right
exactly m times and go down exactly n times. Assume that the right movement is 0 and
the down movement is 1. We could then represent the robot’s path as a binary string of
length = m + n, where the string contains m zeros and n ones. Since the backtracking
algorithm is just trying to explore all possibilities, its runtime complexity is equivalent to
the total permutations of a binary string that contains m zeros and n ones, which is (𝑚+𝑛
𝑚 ).
On the other hand, the space complexity is 𝑂(𝑚 + 𝑛) due to the recursion that goes at
most m + n level deep.
Below is the backtracking code in just five lines of code:
*/
var uniquePaths = function(m, n) {
  return backTrack(0, 0, m, n);
};

function backTrack(r, c, m, n){
  if(r==m-1 && c==n-1){
    return 1;
  }
  if(r>=m || c>=n){
    return 0;
  }
  return backTrack(r+1, c, m, n)+backTrack(r, c+1, m, n);
}

/*
Improved Backtracking Solution using Memoization:
Although the above backtracking solution is easy to code, it is very inefficient in the
sense that it recalculates the same solution for a grid over and over again. By caching the
results, we prevent recalculation and only calculate when necessary. Here, we are using a
dynamic programming (DP) technique called memoization.
*/


var uniquePaths = function(m, n) {
  // create mat as a two dimension array
  // var mat = Array(m+1).fill(Array(n+1).fill(-1));
  var mat = new Array(m+1);
  for (let i = 0; i < m+1; i++) {
    mat[i] = new Array(n+1).fill(-1);
  }
  return backTrack(0, 0, m, n, mat);
};

function backTrack(r, c, m, n, mat){
  if(r == m - 1 && c == n - 1){
    return 1;
  }
  if(r >= m || c >= n){
    return 0;
  }

  if (mat[r + 1][c] == -1){
    mat[r + 1][c] = backTrack(r + 1, c, m, n, mat);
  }
  if (mat[r][c + 1] == -1){
    mat[r][c + 1] = backTrack(r, c + 1, m, n, mat);
  }

  return mat[r + 1][c] + mat[r][c + 1];
}

/*
O(mn) runtime, O(mn) space – Bottom-up dynamic programming:
If you notice closely, the above DP solution is using a top-down approach. Now let’s try a
bottom-up approach. Remember this important relationship that is necessary for this DP
solution to work:
The total unique paths at grid (r, c) are equal to the sum of total unique paths from grid to
the right (r, c + 1) and the grid below (r + 1, c).
How can this relationship help us solve the problem? We observe that all grids of the
bottom edge and right edge must all have only one unique path to the bottom-right corner.
Using this as the base case, we can build our way up to our solution at grid (1, 1)
using the relationship above.

public int uniquePaths(int m, int n) {
  int[][] mat = new int[m + 1][n + 1];
  mat[m - 1][n] = 1;
  for (int r = m - 1; r >= 0; r--) {
    for (int c = n - 1; c >= 0; c--) {
      mat[r][c] = mat[r + 1][c] + mat[r][c + 1];
    }
  }
  return mat[0][0];
}
*/
var uniquePaths = function(m, n) {
  var mat = new Array(m+1);
  for (let i = 0; i < m+1; i++) {
    mat[i] = new Array(n+1).fill(0);
  }
  mat[m - 1][n] = 1;
  for(var r = m-1; r>=0; r--){
    for(var c = n-1; c>=0; c--){
      mat[r][c] = mat[r + 1][c] + mat[r][c + 1];
    }
  }
  return mat[0][0];
};

// 左上角到右下角
var uniquePaths = function(m, n) {
  var mat = Array(m).fill(Array(n).fill(1));
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
        mat[i][j] = mat[i-1][j] + mat[i][j-1];
    }
  }
  return mat[m-1][n-1];
};

// https://leetcode.com/problems/unique-paths/discuss/116646/Very-Simple-JavaScript-Solution-in-100th-Percentile-(56ms)
var uniquePaths = function(m, n) {
  let currentRow = new Array(n);
  // Assigning a 1 to matrix[0][0] is simply a shortcut that skips some later computation
  // as matrix[i][0] will never change in this iterative process
  for (let i = 0; i < n; i++) {
      currentRow[i] = 1;
  }
  for (let row = 1; row < m; row++) {
      for (let i = 1; i < n; i++) {
          currentRow[i] += currentRow[i - 1];
      }
  }
  return currentRow[n - 1];
};

/*
Combinatorial Solution:
It turns out this problem could be solved using combinatorics, which no doubt would be
the most efficient solution. In order to see it as a combinatorial problem, there are some
necessary observations. Look at the 7×3 sample grid in the picture above. Notice that no
matter how you traverse the grids, you always traverse a total of 8 steps. To be more
exact, you always have to choose 6 steps to the right (R) and 2 steps to the bottom (B).
Therefore, the problem can be transformed to a question of how many ways can you
choose 6R‘s and 2B‘s in these 8 steps. The answer is C(8,2) or C(8,6).
Therefore, the general solution for an m × n grid is C(m+n−2,m−1 ).
*/

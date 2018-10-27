/*
Chapter 8: Dynamic Programming

70. Climbing Stairs
https://leetcode.com/problems/climbing-stairs/description/

You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

};

/*
Solution:
O(n) runtime, O(1) space – Dynamic programming:
This is a classic Dynamic Programming problem.
Define:
f(n) = number of ways you can climb to the nth step.
To reach to the nth step, you have only two choices:
1. Advance one step from the n – 1th step.
2. Advance two steps from the n – 2th step.

Therefore, f(n) = f(n – 1) + f(n – 2), which is the exact same recurrence formula defined
by the Fibonacci sequence (with different base cases, though).
Set base cases f(1) = 1, f(2) = 2 and you are almost done.
Now, we could calculate f(n) easily by storing previous values in an one dimension array
and work our way up to n. Heck, we can even optimize this further by storing just the
previous two values.
*/
var climbStairs = function(n) {
  var p=1, q=1;
  for(var i = 2; i<=n; i++){
    var temp = q;
    q += p;
    p = temp;
  }
  return q;
};

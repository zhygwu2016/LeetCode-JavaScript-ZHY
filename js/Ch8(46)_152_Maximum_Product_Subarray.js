/*
152. Maximum Product Subarray
https://leetcode.com/problems/maximum-product-subarray/description/

Given an integer array nums, find the contiguous subarray within an array
(containing at least one number) which has the largest product.

Example 1:
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

};


/*
Solution:
This problem is very similar to Question [45. Maximum Sum Subarray]. There is a slight
twist though. Besides keeping track of the largest product, we also need to keep track of
the smallest product. Why? The smallest product, which is the largest in the negative
sense could become the maximum when being multiplied by a negative number.
Let us denote that:

f(k) = Largest product subarray, from index 0 up to k.
Similarly,
g(k) = Smallest product subarray, from index 0 up to k.

Then,
f(k) = max( f(k-1) * A[k], A[k], g(k-1) * A[k] )
g(k) = min( g(k-1) * A[k], A[k], f(k-1) * A[k] )

There we have a dynamic programming formula. Using two arrays of size n, we could
deduce the final answer as f(n-1). Since we only need to access its previous elements at
each step, two variables are sufficient.
*/
var maxProduct = function(nums) {
  var min = nums[0], max = nums[0], maxAns = nums[0];
  for(let i=1; i<nums.length; i++){
    var mx=max, mn = min; // 上一个循环的max和min
    max = Math.max(Math.max(nums[i], mx*nums[i]), mn*nums[i]);
    min = Math.min(Math.min(nums[i], mx*nums[i]), mn*nums[i]);
    maxAns = Math.max(max, maxAns);
  }
  return maxAns;
};

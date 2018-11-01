/*
53. Maximum Subarray
https://leetcode.com/problems/maximum-subarray/description/

Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
If you have figured out the O(n) solution, try coding another solution using
the divide and conquer approach, which is more subtle.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

};


/*
Solution:

O(n log n) runtime, O(log n) stack space – Divide and Conquer:

Assume we partition the array A into two smaller arrays S and T at the middle index, M.
Then, S = A1 … AM-1, and T = AM+1 … AN.

The contiguous subarray that has the largest sum could either:
  i. Contain the middle element:
    a. The largest sum is the maximum suffix sum of S + AM + the maximum
       prefix sum of T.
  ii. Does not contain the middle element:
    a. The largest sum is in S, which we could apply the same algorithm to S.
    b. The largest sum is in T, which we could apply the same algorithm to T.

The runtime complexity could be expressed as T(n) = 2T(n/2) + O(n), which is
𝑂(n log n). We will not attempt to prove it here; you could read up any advanced
algorithm textbooks to learn the proof.
*/
var maxSubArray = function(nums) {
  return maxSubArrayhelper(nums, 0, nums.length-1);
};

function maxSubArrayhelper(A, L, R){
  if(L>R) return -Infinity;
  var M = Math.floor((L+R)/2);
  var leftAns = maxSubArrayhelper(A, L, M-1);
  var rightAns = maxSubArrayhelper(A, M+1, R);

  var lMaxSum = 0;
  var sum = 0;
  for(let i = M-1; i>=L; i--){
    sum += A[i];
    lMaxSum = Math.max(lMaxSum, sum);
  }

  var rMaxSum = 0;
   sum = 0;
  for(let i = M+1; i<=R; i++){
    sum += A[i];
    rMaxSum = Math.max(rMaxSum, sum);
  }

  return Math.max(lMaxSum+A[M]+rMaxSum, Math.max(leftAns, rightAns));
}


/*
O(n) runtime, O(1) space – Dynamic programming:
To devise a dynamic programming formula, let us assume that we are calculating the
maximum sum of subarray that ends at a specific index.
Let us denote that:
f(k) = Maximum sum of subarray ending at index k.
Then,
f(k) = max( f(k-1) + A[k], A[k] )

Using an array of size n, We could deduce the final answer by as f(n – 1), with the initial
state of f(0) = A[0]. Since we only need to access its previous element at each step, two
variables are sufficient. Notice the difference between the two: maxEndingHere and
maxSoFar; the former is the maximum sum of subarray that must end at index k, while
the latter is the global maximum subarray sum.
*/
var maxSubArray = function(nums) {
  var maxEndingHere = nums[0], maxSoFar = nums[0];
  for(let i=1; i<nums.length; i++){
    maxEndingHere = Math.max(maxEndingHere+nums[i], nums[i]);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
  }
  return maxSoFar;
};

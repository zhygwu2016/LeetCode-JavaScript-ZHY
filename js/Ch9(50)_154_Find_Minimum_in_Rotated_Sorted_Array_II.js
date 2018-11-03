/*
154. Find Minimum in Rotated Sorted Array II
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

The array may contain duplicates.

Example 1:
Input: [1,3,5]
Output: 1

Example 2:
Input: [2,2,2,0,1]
Output: 0

Note:
This is a follow up problem to Find Minimum in Rotated Sorted Array.
Would allow duplicates affect the run-time complexity? How and why?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

};

/*
Question:
If the rotated sorted array could contain duplicates? Is your algorithm still O(log n) in
runtime complexity?

Solution:

For case where AL == AM == AR, the minimum could be on AM’s left or right side (eg,
[1, 1, 1, 0, 1] or [1, 0, 1, 1, 1]). In this case, we could not discard either subarrays and
therefore such worst case degenerates to the order of O(n).
*/
var findMin = function(nums) {
  var L = 0, R = nums.length-1;
  while(L<R && nums[L]>=nums[R]){
    var M = Math.floor((L + R)/2);
    if(nums[M] > nums[R]){
      L = M + 1;
    }else if(nums[M] < nums[L]){
      R = M;
    }else{  // A[L] == A[M] == A[R]
      L = L + 1;
    }
  }
  return nums[L];
};

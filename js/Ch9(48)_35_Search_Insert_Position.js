/*
Chapter 9: Binary Search

35. Search Insert Position
https://leetcode.com/problems/search-insert-position/description/

Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

};


/*
Solution:

This problem is a direct application of Binary Search, as you can spot it easily by the
keywords sorted and finding target. The requirements seem complex, but let’s first start
with something we’re already familiar with – The raw binary search algorithm.

Let’s start with defining two variables, L and R representing its lowest and highest
inclusive indices that are searched, which are initialized to 0 and n – 1 respectively.

int L = 0, R = A.length - 1;
while (L < R) {
  int M = (L + R) / 2;
  // TODO: Implement conditional checks.
}

Now, the key part of the binary search – We look at the middle element, and ask: “Is the
middle element smaller than the target element?” If this is true, then it means all elements
from L up to M inclusive could be excluded from the search. Otherwise, the middle
element is greater or equal to the target element and that means all elements from M + 1
up to R could be excluded.

int L = 0, R = A.length - 1;
while (L < R) {
  int M = (L + R) / 2;
  if (A[M] < target) {
    L = M + 1;
  } else {
    R = M;
  }
}

A good thing to verify your above binary search does not stuck in an infinite loop is to
test with input containing two elements, e.g., [1,3] and test with target = 0 and 1. Here,
our binary search works properly, but if we were to define M as the upper middle, that is:
M = (L + R + 1) / 2, then it will stuck in an infinite loop.

We’ve now reached the final step. When the while loop ends, L must be equal to R and it
is a valid index. Obviously, if A[L] is equal to target, we return L. If A[L] is greater than
target, that means we are inserting target before A[L], so we return L. If A[L] is less than
target, that means we insert target after A[L], so we return L + 1.
*/

var searchInsert = function(nums, target) {
  var L = 0, R = nums.length-1;
  while(L < R){
    var M = Math.floor((L + R)/2);
    if(nums[M]<target){
      L = M + 1;
    }else{
      R = M;
    }
  }
  return (nums[L]<target)? L+1 : L;
};

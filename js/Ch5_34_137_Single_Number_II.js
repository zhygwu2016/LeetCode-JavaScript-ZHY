/*
137. Single Number II
https://leetcode.com/problems/single-number-ii/description/

Given a non-empty array of integers, every element appears three times except for one,
which appears exactly once. Find that single one.

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,3,2]
Output: 3

Example 2:
Input: [0,1,0,1,0,1,99]
Output: 99
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

};

/*
Solution:
To solve this problem using only constant space, you have to rethink how the numbers
are being represented in computers – using bits.
If you sum the ith bit of all numbers and mod 3, it must be either 0 or 1 due to the
constraint of this problem where each number must appear either three times or once.
This will be the ith bit of that "single number".
A straightforward implementation is to use an array of size 32 to keep track of the total
count of ith bit.
*/
var singleNumber = function(nums) {
  var count = [];
  for(let i=0; i<32;i++){
    count.push(0);
  }
  var result = 0;
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < nums.length; j++) {
      if ((nums[j] >> i) & 1) {
        count[i]++;
      }
    }
    result |= ((count[i] % 3) << i);
  }
  return result;
};

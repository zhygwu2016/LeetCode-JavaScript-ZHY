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
      if ((nums[j] >> i) & 1){
      //if (((nums[j] >> i) & 1) == 1 ) {
        count[i]++;
      }
    }
    result |= ((count[i] % 3) << i);
  }
  return result;
};

/*
We can improve this based on the previous solution using three bitmask variables:
  1. ones as a bitmask to represent the ith bit had appeared once.
  2. twos as a bitmask to represent the ith bit had appeared twice.
  3. threes as a bitmask to represent the ith bit had appeared three times.
When the ith bit had appeared for the third time, clear the ith bit of both ones and twos to 0.
The final answer will be the value of ones.
*/
// https://www.liaohuqiu.net/cn/posts/bitmasp-and-lipo/
var singleNumber = function(nums) {
  var ones = 0, twos = 0, threes = 0;
  for(let i = 0; i<nums.length; i++){
    twos |= ones & nums[i];
    ones ^= nums[i];
    threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
  }
  return ones;
};
/*
Further Thoughts:
If we extend the problem to:
Given an array of integers, every element appears k times except for one. Find
that single one which appears l times.
How would you solve it?
Please see the excellent answer by @ranmocy in LeetCode Discuss:
https://oj.leetcode.com/discuss/857/constant-space-solution?show=2542#a2542
*/

// https://leetcode.com/problems/single-number-ii/discuss/43294/Challenge-me-thx
var singleNumber = function(nums) {
  var ones = 0, twos = 0;
  for(let i = 0; i<nums.length; i++){
    ones = (ones^nums[i]) & ~twos;
    // "(ones ^ A[i]) & ~twos" basically means perform the above mentioned operation
    // if and only if A[i] is not present in the set "twos".
    twos = (twos^nums[i]) & ~ones;
  }
  return ones;
};

// https://leetcode.com/problems/single-number-ii/discuss/43296/An-General-Way-to-Handle-All-this-sort-of-questions.
// https://www.cnblogs.com/bjwu/p/9323808.html
var singleNumber = function(nums) {
  //we need to implement a tree-time counter(base 3) that if a bit appears three time ,it will be zero.
  //#curent  income  ouput
  //# ab      c/c       ab/ab
  //# 00      1/0       01/00
  //# 01      1/0       10/01
  //# 10      1/0       00/10
  // a=~abc+a~b~c;
  // b=~a~bc+~ab~c;
  var a=0, b=0;
  for(let i = 0; i<nums.length; i++){
    let c = nums[i];
    let ta=(~a&b&c)|(a&~b&~c);
    b=(~a&~b&c)|(~a&b&~c);
    a=ta;
  }
  //we need find the number that is 01,10 => 1, 00 => 0.
  return a|b;
};

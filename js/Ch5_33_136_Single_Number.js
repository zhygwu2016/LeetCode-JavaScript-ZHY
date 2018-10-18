/*
Chapter 5: Bit Manipulation

136. Single Number
https://leetcode.com/problems/single-number/description/

Given a non-empty array of integers, every element appears twice except for one.
Find that single one.

Note:
Your algorithm should have a linear runtime complexity.
Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4

Example Questions Candidate Might Ask:
Q: Does the array contain both positive and negative integers?
A: Yes.
Q: Could any element appear more than twice?
A: No.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

};

/*
Solution:
We could use a map to keep track of the number of times an element appears. In a second
pass, we could extract the single number by consulting the hash map. As a hash map
provides constant time lookup, the overall complexity is O(n), where n is the total
number of elements.
*/
var singleNumber = function(nums) {
  var map = new Map();
  for(let i=0; i<nums.length; i++){
    var count = (map.has(nums[i])) ? map.get(nums[i]) : 0;
    map.set(nums[i], count+1);
  }
  for(let i=0; i<nums.length; i++){
    if(map.get(nums[i])==1){
      return nums[i];
    }
  }
};
/*
Although the map approach works, we are not taking advantage of the “every elements
appears twice except one” property. Could we do better in one pass?
How about inserting the elements into a set instead? If an element already exists, we
discard the element from the set knowing that it will not appear again. After the first pass,
the set must contain only the single element.
*/
var singleNumber = function(nums) {
  var set = new Set();
  for(let i=0; i<nums.length; i++){
    if(set.has(nums[i])){
      set.delete(nums[i]);
    }else{
      set.add(nums[i]);
    }
  }
  return set.keys().next().value;
};
/*
The set is pretty efficient and runs in one pass. However, it uses extra space of O(n).
XOR-ing a number with itself is zero. If we XOR all numbers together, it would
effectively cancel out all elements that appear twice leaving us with only the single
number. As the XOR operation is both commutative and associative, the order in how
you XOR them does not matter.

Concept
If we take XOR of zero and some bit, it will return that bit
  a ⊕ 0 = a
If we take XOR of two same bits, it will return 0
  a ⊕ a = 0
a ⊕ b ⊕ a = ( a ⊕ a ) ⊕ b = 0 ⊕ b = b

Complexity Analysis
Time complexity :
O(n). We only iterate through nums, so the time complexity is the number of elements in nums.

Space complexity :
O(1).
*/
var singleNumber = function(nums) {
  var num = 0;
  for(let i=0; i<nums.length; i++){
    num ^= nums[i];
  }
  return num;
};
/*
Further Thoughts:
Let us change the question a little: “If every element appears even number of times
except for one element that appears odd number of times, find that one element”, would
the XOR approach work? Why?
*/

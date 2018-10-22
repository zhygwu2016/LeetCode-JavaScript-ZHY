/*
1. Two Sum
https://leetcode.com/problems/two-sum/description/

Given an array of integers, return indices of the two numbers such that
they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

// Solution-1 Brute Force O(n^2)
/*
O(n^2) runtime, O(1) space – Brute force:
The brute force approach is simple. Loop through each element x and find if
there is another value that equals to target – x. As finding another value
requires looping through the rest of array, its runtime complexity is O(n^2).
*/
var twoSum = function(nums,target){
  var result = [];
  for(var i = 0; i<nums.length; i++) {
    for(var j = i+1; j<nums.length; j++){
      if(nums[i]+nums[j]===target){
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};
// console.log(twoSum([2, 7, 11, 15],9));


// Solution-2 Hash Table O(n)
// https://coderbyte.com/algorithm/two-sum-problem
/*
If the array is: [4, 5, 1, 8] and the sum is 6 the algorithm would proceed
with the steps below:
(1) The hash table is initially empty and the first element in the array is 4.
    We simply put 4 into the hash table.
(2) The next element is 5. We check to see if the sum minus the current element
    exists in the hash table. 6 - 5 = 1 does not exist in the hash table.
    So add 5 to the hash table.
(3) The next element is 1. We check to see if the sum minus the current element
    exists in the hash table. 6 - 1 = 5 does exist in the hash table
    so we found a pair!
*/
var twoSumHash = function(nums,target){
  var hash = {};
  for (var i = 0; i < nums.length; i++){
    var num = nums[i];

    // check if this number exists in hash table
    if (hash[num]!== undefined){
      // if so then we found a pair of numbers that sum to target
      return [hash[num],i];
    }else{
      hash[target-num] = i;
    }
  }

  return[];

};
console.log(twoSumHash([2, 7, 11, 15],9));

// One video about hash table:
// https://www.youtube.com/watch?v=F95z5Wxd9ks

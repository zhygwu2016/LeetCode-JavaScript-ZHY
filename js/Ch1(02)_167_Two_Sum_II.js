/*
167. Two Sum II
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that
they add up to the target, where index1 must be less than index2.

Note:
Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not
use the same element twice.

Example:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
*/

// 1. hash
var twoSum = function(numbers, target) {
  var hash = {};
  for(var i=0; i<numbers.length;i++){
    var num = numbers[i];

    if(hash[num]!==undefined){
      return [hash[num]+1,i+1]; // non zero-based
    }else{
      hash[target-num]=i;
    }

  }
  return [];

};

// 2. pointer  O(n) runtime, O(1) space
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51287/JavaScript-simple-solution
// O(n log n) runtime, O(1) space – Binary search:
/*For each element x, we could look up if target – x exists in O(log n) time by applying
binary search over the sorted array. Total runtime complexity is O(n log n).*/
var twoSumPointer = function(numbers, target){
  var i=0, j=numbers.length-1;
  while(numbers[i]+numbers[j]!==target){
    // numbers[i]+numbers[j] < target ? i++ : j--;
    if(numbers[i] + numbers[j] < target){
      i++;
    }else{
      j--;
    }
  }
  return [i+1,j+1];
};
//console.log(twoSumPointer([2, 7, 11, 15],9));

// 3. binary search
var twoSumBinary = function(numbers, target) {
  // Assume input is already sorted.
  for (var i = 0; i < numbers.length; i++) {
    var j = bsearch(numbers, target - numbers[i], i + 1);
    if (j != -1) {
      return [i + 1, j + 1];
    }
  }
};

var bsearch = function (array, key, start) {
  var left = start, right = array.length - 1;
  while (left < right) {
    var middle = Math.floor((left + right) / 2);
    if (array[middle] < key) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (left == right && array[left] == key) ? left : -1;
};

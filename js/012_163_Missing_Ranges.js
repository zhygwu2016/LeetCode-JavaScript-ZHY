/*
163. Missing Ranges
https://leetcode.com/problems/missing-ranges/description/

Given a sorted integer array nums, where the range of elements are in the
inclusive range [lower, upper], return its missing ranges.

Example:
Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]

Example Questions Candidate Might Ask:
Q: What if the given array is empty?
A: Then you should return [“0->99”] as those ranges are missing.
Q: What if the given array contains all elements from the ranges?
A: Return an empty list, which means no range is missing.
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  var ranges = [];
  var prev = lower-1;
  for(var i=0; i<=nums.length;i++){
    var curr = (i==nums.length)? upper+1 : nums[i];
    if (curr-prev>=2){
      if (curr-prev==2){
        ranges.push((prev+1).toString());
      }else{
        //ranges.push(`${prev+1}->${curr-1}`);
        ranges.push(prev+1 + '->' +(curr-1));
      }
    }
    prev=curr;
  }
  return ranges;
};

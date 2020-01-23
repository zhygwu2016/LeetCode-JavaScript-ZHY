/**
340. Longest Substring with At Most K Distinct Characters
https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

Given a string, find the length of the longest substring T that 
contains at most k distinct characters.

Example 1:
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {

};

/*
Approach 1: Sliding Window + Hashmap.
Let's use here the logic from the more simple problem with 
at most two distinct characters.
To solve the problem in one pass let's use here sliding window approach 
with two set pointers left and right serving as the window boundaries.
The idea is to set both pointers in the position 0 and then move right pointer 
to the right while the window contains not more than k distinct characters. 
If at some point we've got k + 1 distinct characters, 
let's move left pointer to keep not more than k + 1 distinct characters in the window.
*/

var lengthOfLongestSubstringKDistinct = function(s, k) {
    let charMap = [];
    for (let i = 0; i<s.length; i++){
        charMap[s.charAt(i)] = 0;
    }
    
    let i = 0, numDistinct = 0, maxLength = 0;
    for (let j = 0; j< s.length; j++){
        if(charMap[s.charAt(j)] == 0){
            numDistinct++;
        }
        charMap[s.charAt(j)]++;
        
        while(numDistinct > k){
            charMap[s.charAt(i)]--;
            if(charMap[s.charAt(i)] == 0){
                numDistinct--;
            }
            i++;
        }
        maxLength = Math.max(j-i+1, maxLength);
    }
    return maxLength;
};
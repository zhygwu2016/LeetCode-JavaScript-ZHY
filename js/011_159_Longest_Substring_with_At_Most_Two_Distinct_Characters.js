/*
159. Longest Substring with At Most Two Distinct Characters
https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/description/

Given a string s , find the length of the longest substring t  that contains
at most 2 distinct characters.

Example 1:
Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.

Example 2:
Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.

*/

/**
 * @param {string} s
 * @return {number}
 */

// 1.
/*
Solution:
First, we could simplify the problem by assuming that S contains two or more distinct
characters, which means T must contain exactly two distinct characters.
The brute force approach is O(n^3) where n is the length of S. We can form every possible
substring, and for each substring insert all characters into a Set which the Set’s size
indicating the number of distinct characters. This could be easily improved to O(n^2) by
reusing the same Set when adding a character to form a new substring.
The trick is to maintain a sliding window that always satisfies the invariant where there
are always at most two distinct characters in it. When we add a new character that breaks
this invariant, how can we move the begin pointer to satisfy the invariant? Using the
above example, our first window is the substring “abba”. When we add the character ‘c’
into the sliding window, it breaks the invariant. Therefore, we have to readjust the
window to satisfy the invariant again. The question is which starting point to choose so
the invariant is satisfied.
Let’s look at another example where S = “abaac”. We found our first window “abaa”.
When we add ‘c’ to the window, the next sliding window should be “aac”.
This method iterates n times and therefore its runtime complexity is O(n). We use three
pointers: i, j, and k.
*/
var lengthOfLongestSubstringTwoDistinct = function(s) {
  var i=0, j=-1, maxLength = 0;
  for(k=1; k<s.length; k++){
    if (s.charAt(k)==s.charAt(k-1)) continue;
    if (j>=0 && s.charAt(j)!==s.charAt(k)){
      maxLength = Math.max(k-i, maxLength);
      i=j+1;
    }
    j = k-1;
  }
  return Math.max(s.length-i, maxLength);
};

// 2.
/*
Further Thoughts:
Although the above method works fine, it could not be easily generalized to the case
where T contains at most k distinct characters.
The key is when we adjust the sliding window to satisfy the invariant, we need a counter
of the number of times each character appears in the substring.
*/
var lengthOfLongestSubstringTwoDistinct = function(s) {
  var charMap = [], l = 256;
  for(i=0; i<l; i++){
    charMap.push(0);
  }
  // var count = Array.apply(null, Array(256)).map(Number.prototype.valueOf,0);
  // var count = new Array(256+1).join('0').split('').map(parseFloat)

  var i=0, numDistinct = 0, maxLength=0;
  for (var j = 0; j < s.length; j++) {
    if (charMap[s.charAt(j).charCodeAt()] == 0){
      numDistinct++;
    }
    charMap[s.charAt(j).charCodeAt()]++;

    while (numDistinct > 2) {
      charMap[s.charAt(i).charCodeAt()]--;
      if (charMap[s.charAt(i).charCodeAt()] == 0){
        numDistinct--;
      }
      i++;
    }
    maxLength = Math.max(j-i+1, maxLength);
  }

  return maxLength;
};

//3.
var lengthOfLongestSubstringTwoDistinct = function(s) {
  var charMap = [];
  for (var z = 0; z < s.length; z++) {
    charMap[s.charAt(z)] = 0 ;
  }
  // JavaScript Associative Arrays
  // https://www.dyn-web.com/javascript/arrays/associative.php

  var i=0, numDistinct = 0, maxLength=0;
  for (var j = 0; j < s.length; j++) {
    if (charMap[s.charAt(j)] == 0){
      numDistinct++;
    }
    charMap[s.charAt(j)]++;

    while (numDistinct > 2) {
      charMap[s.charAt(i)]--;
      if (charMap[s.charAt(i)] == 0){
        numDistinct--;
      }
      i++;
    }
    maxLength = Math.max(j-i+1, maxLength);
  }

  return maxLength;
};

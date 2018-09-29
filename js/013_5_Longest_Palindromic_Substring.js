/*
5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/description/

Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
/*
O(n^2) runtime, O(1) space – Simpler solution:
In fact, we could solve it in O(n^2) time using only constant space.
We observe that a palindrome mirrors around its center. Therefore, a palindrome can be
expanded from its center, and there are only 2n – 1 such centers.
You might be asking why there are 2n – 1 but not n centers? The reason is the center of a
palindrome can be in between two letters. Such palindromes have even number of letters
(such as “abba”) and its center are between the two ‘b’s.
Since expanding a palindrome around its center could take O(n) time, the overall
complexity is O(n^2).
*/
var longestPalindrome = function(s) {
  var start=0, end=0;
  for(i=0;i<s.length;i++){
    var len1 = expandAroundCenter(s,i,i);
    var len2 = expandAroundCenter(s,i,i+1);
    len = Math.max(len1,len2);
    if(len>end-start){
      start = i - Math.floor((len-1)/2);
      end = i + Math.ceil((len+1)/2);
    }
  }
  return s.substring(start,end);
};

var expandAroundCenter = function(s,left,right){
  while(left>=0 && right<s.length && s.charAt(left)==s.charAt(right)){
    left--;
    right++;
  }
  return right-left-1;
};

// O(n) runtime, O(n) space – Manacher’s algorithm:
// https://articles.leetcode.com/longest-palindromic-substring-part-ii/
// https://www.felix021.com/blog/read.php?2040

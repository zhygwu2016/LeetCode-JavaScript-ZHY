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
var longestPalindromeTest = function(s) {
  t = '^#'+ s.split('').join('#') + '#$';
  // e.g. cabae => ^#c#a#b#a#e#$

  var n = t.length;
  var p = [];
  for(i=0; i<n; i++){
    p.push(0);
  }

  var c=0, r=0;
  for (var i = 1; i < n-1; i++) {
    var i_mirror = 2*c-i; // equals to i' = C - (i-C)

    p[i] = (r > i) ? Math.min(r-i, p[i_mirror]) : 0;

    // Attempt to expand palindrome centered at i
    while (t[i + 1 + p[i]] == t[i - 1 - p[i]]){
      p[i]++;
    }

    // If palindrome centered at i expand past R,
    // adjust center based on expanded palindrome.
    if (i + p[i] > r) {
      c = i;
      r = i + p[i];
    }
  }

  // Find the maximum element in P.
  var maxLen = 0;
  var centerIndex = 0;
  for (var j = 1; j < n-1; j++) {
    if (p[j] > maxLen) {
      maxLen = p[j];
      centerIndex = j;
    }
  }

  return s.substr((centerIndex - 1 - maxLen)/2, maxLen);
};

//longestPalindromeTest('babad');

/*
https://leetcode.com/problems/valid-palindrome-ii/
Given a non-empty string s, you may delete at most one character. 
Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True

Explanation: You could delete the character 'c'.
Note: The string will only contain lowercase characters a-z. 
The maximum length of the string is 50000.
*/
/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {

};

/**
Approach #1: Brute Force [Time Limit Exceeded]
For each index i in the given string, let's remove that character, 
then check if the resulting string is a palindrome. 
If it is, (or if the original string was a palindrome), then we'll return true.
Time Complexity: 
O(N^2)where N is the length of the string. We do the following N times: 
create a string of length N and iterate over it.
Space Complexity: 
O(N), the space used by our candidate answer.
 */

/**
Approach #2: Greedy [Accepted]
Intuition
If the beginning and end characters of a string are the same 
(ie. s[0] == s[s.length - 1]), then whether the inner characters are 
a palindrome (s[1], s[2], ..., s[s.length - 2]) uniquely determines 
whether the entire string is a palindrome.

Algorithm
Suppose we want to know whether s[i], s[i+1], ..., s[j] form a palindrome. 
If i >= j then we are done. If s[i] == s[j] then we may take i++; j--. 
Otherwise, the palindrome must be either s[i+1], s[i+2], ..., s[j] 
or s[i], s[i+1], ..., s[j-1], and we should check both cases.
 */

 /**
 * @param {string} s
 * @return {boolean}
 */

const validPalindromeRange = (s, i, j) => {
  for (let k = i; k<= (i + (j-i)/2); k++){
      if(s.charAt(k) !== s.charAt(j-k+i)){
          return false;
      }
  }
  return true;
}

var validPalindrome = function(s) {
  for (let i = 0; i<s.length/2; i++){
      if (s.charAt(i) !== s.charAt(s.length-1-i)){
          let j = s.length-1-i;
          return (validPalindromeRange(s, i+1, j) || validPalindromeRange(s, i, j-1));
      }
  }
  return true;
};
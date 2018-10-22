/*
151. Reverse Words in a String
https://leetcode.com/problems/reverse-words-in-a-string/description/

Given an input string, reverse the string word by word.

Example:
Input: "the sky is blue",
Output: "blue is sky the".

Note:
A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However,
your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space
in the reversed string.
*/

/**
 * @param {string} str
 * @returns {string}
*/

//1. O(n) runtime, O(n) space
/*
One simple approach is a two-pass solution: First pass to split the string
by spaces into an array of words, then second pass to extract the words
in reversed order.
We can do better in one-pass. While iterating the string in reverse order,
we keep track of a word’s begin and end position. When we are at the beginning
of a word, we append it.
*/
var reverseWords = function(str) {
  var revStr = '';
  var stop = str.length;
  for(var i = str.length-1; i>=0; i--){
    if(str.charAt(i)==' '){
      stop = i;
    }else if( i==0 || str.charAt(i-1)==' '){
      if(revStr.length!=0){
        revStr += ' ';
      }
      revStr += str.substring(i,stop);
    }
  }
  return revStr;
};

console.log(reverseWords('the sky is blue'));

//2.
var reverseWords = function(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
  // Remove whitespace from both sides of a string
  // Split the string by whitespace (one or more whitespace: /\s+/)
  // Reverse the array
  // Join the array of words in reverse
};

/*
125. Valid Palindrome 回文
https://leetcode.com/problems/valid-palindrome/description/

Given a string, determine if it is a palindrome, considering only
alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
*/

// 1. reverse, and compare
var isPalindrome = function(s) {
  s = s.replace(/[\W_]/g, '').toLowerCase();
  var r = s.split('').reverse().join('');
  /*
  The split() method splits a String object into an array of strings by
  separating the string into substrings, using a specified separator string
  to determine where to make each split.

  The join() method joins all elements of an array (or an array-like object)
  into a string and returns this string.
  */
  return s === r;
};

// 2. reverse. turn string into array, reverse, don't turn back.
//Much better than the first one
// https://stackoverflow.com/questions/33436807/why-we-are-using-in-this-expression-str-replace-w-g-tolowercase-w/38663031
var isPalindrome = function(s) {
  var clearString = s.toLowerCase().replace(/[^0-9a-z]/gi, '').split('');

  for (var i = 0; i < clearString.length/2; i++) {
    if (clearString[i] !== clearString[clearString.length -1 -i]) {
      return false;
    }
  }
  return true;
};

// 3. two pointers
var isPalindrome = function(s){
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  var i=0, j= s.length - 1;
  while(i<j){
    if(s[i]===s[j]){
      i++;
      j--;
    }else{
      return false;
    }
  }
  return true;
};

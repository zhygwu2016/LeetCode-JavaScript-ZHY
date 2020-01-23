/*
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

//1.
/*
Solution:
O(n) runtime, O(1) space – Two iterations:
How can we look up if a character exists in a substring instantaneously? The answer is to
use a simple table to store the characters that have appeared. Make sure you communicate
with your interviewer if the string can have characters other than ‘a’–‘z’. (ie, Digits?
Upper case letter? Does it contain ASCII characters only? Or even unicode character
sets?)
The next question is to ask yourself what happens when you found a repeated character?
For example, if the string is “abcdcedf”, what happens when you reach the second
appearance of ‘c’?
When you have found a repeated character (let’s say at index j), it means that the current
substring (excluding the repeated character of course) is a potential maximum, so update
the maximum if necessary. It also means that the repeated character must have appeared
before at an index i, where i is less than j.
Since you know that all substrings that start before or at index i would be less than your
current maximum, you can safely start to look for the next substring with head which
starts exactly at index i + 1.
Therefore, you would need two indices to record the head and the tail of the current
substring. Since i and j both traverse at most n steps, the worst case would be 2n steps,
which the runtime complexity must be O(n).
Note that the space complexity is constant O(1), even though we are allocating an array.
This is because no matter how long the string is, the size of the array stays the same at
256.
*/
var lengthOfLongestSubstring = function(s) {
  // initialize a boolean array, length of 256
  // why 256? There are totally 256 ASCII codes
  // https://stackoverflow.com/questions/32878514/when-to-initialize-an-array-with-256
  // http://www.asciitable.com
  var booleanExist = [], length = 256;
  for(i=0; i<length; i++){
    booleanExist.push(false);
  }

  var i = 0, maxLength = 0;
  for(j=0;j<s.length;j++){
    while(booleanExist[s.charAt(j)]){
      booleanExist[s.charAt(i)]=false;
      i++;
    }
    booleanExist[s.charAt(j)] = true;
    maxLength = Math.max(j-i+1, maxLength);
  }
  return maxLength;
};


// 2.
/*
O(n) runtime, O(1) space – Single iteration:
The above solution requires at most 2n steps. In fact, it could be optimized to require only
n steps. Instead of using a table to tell if a character exists or not, we could define a
mapping of the characters to its index. Then we can skip the characters immediately
when we found a repeated character.
不用boolean数列（因为只能储存true或者false），
而是用字符出现的index位置来储存。-1表示没有，正数表示index位置。这样储存的信息更多。
*/

var lengthOfLongestSubstring = function(s) {
    let charMap = [], length = 256;
    for (let i = 0; i<length; i++){
        charMap.push(-1);
    }
    
    let i = 0, maxLength = 0;
    for(let j = 0; j<s.length; j++){
        if(charMap[s.charAt(j)]>=i){
            i = charMap[s.charAt(j)] + 1;
        }
        charMap[s.charAt(j)] = j;
        maxLength = Math.max(j-i+1, maxLength);
    }
    return maxLength;
};

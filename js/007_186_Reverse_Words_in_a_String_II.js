/*
186. Reverse Words in a String II
https://leetcode.com/problems/reverse-words-in-a-string-ii/description/

Given an input string , reverse the string word by word.

Example:
Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

Note:
A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces.
The words are always separated by a single space.

Follow up: Could you do it in-place without allocating extra space?
*/

/*
Solution:
O(n) runtime, O(1) space – In-place reverse:
Let us indicate the ith word by wi and its reversal as wi′. Notice that when you
reverse a word twice, you get back the original word. That is, (wi′)′ = wi.

The input string is w1 w2 … wn. If we reverse the entire string, it becomes
wn′ … w2′ w1′. Finally, we reverse each individual word and it becomes
wn … w2 w1.
Similarly, the same result could be reached by reversing each individual word
first, and then reverse the entire string.
*/

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
// Reverse whole string.
// Applied two pointers to mark each word.
// For each word, use two pointers to reverse.
var reverseWords = function(str) {
  if (str === null || str.length === 0){
    return ;
  }

  // reverse the whole str
  str.reverse();
  // input is an array, so we can use reverse().
  // if input is string, it cannot be used!!
  // Strings are immutable – they cannot change, we can only ever make new strings!!!

  // reverse manually:
  // for(let i = 0; i < Math.floor((str.length)/2); i++) {
  //   let temp = str[i];
  //   str[i] = str[str.length-1-i];
  //   str[str.length-1-i] = temp;
  // }

  // reverse every word
  var start = 0, end = 0;
  while(end<=str.length){
    if(str[end]== ' ' || end == str.length){
      let left = start;
      let right = end-1;
      while(left<right){
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
      }
      start = end + 1;
    }
    end++;
  }

  // return str;
};

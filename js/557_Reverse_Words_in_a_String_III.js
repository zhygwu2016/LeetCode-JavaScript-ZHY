/*
https://leetcode.com/problems/reverse-words-in-a-string-iii/
Given a string, you need to reverse the order of characters in each word within 
a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and 
there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     if (s.length = 0){
//         return ;
//     }
//     let a = s.split('');
//     let start = 0, end = 0;
//     while(end<=a.length){
//         if(a[end] == ' ' || end == a.length){
//             let left = start;
//             let right = end-1;
//             while(left<right){
//                 let temp = a[left];
//                 a[left] = a[right];
//                 a[right] = temp;
//                 left++;
//                 right--;
//             }
//             start = end+1;
//         }
//         end++;
//     }
//     s = a.join('');
//     return s;
// };

var reverseWords = function(s) {
  if (s.length = 0){
      return ;
  }
  let a = s.split(' ');
  for( let i = 0; i<a.length; i++){
     a[i] = a[i].split('').reverse().join('');
  }
  let result = a.join(' ');
  return result;
};


/*
28. Implement strStr()
https://leetcode.com/problems/implement-strstr/description/

Implement strStr().
Return the index of the first occurrence of needle in haystack,
or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
What should we return when needle is an empty string? This is a great question
to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string.
This is consistent to C's strstr() and Java's indexOf().
*/

// 1.
var strStr = function(haystack, needle) {
  for (var i = 0; ; i++) {
    for (var j = 0; ; j++) {
      if (j == needle.length) return i;
      if (i + j == haystack.length) return -1;
      if (needle.charAt(j) !== haystack.charAt(i + j)) break;
    }
  }
};

// 2. https://leetcode.com/problems/implement-strstr/discuss/163740/Simple-and-Clear-Solution
var strStr = function(haystack, needle) {
  var diff = haystack.length - needle.length;
  if(needle.length==0){
    return 0;
  }
  for(var i = 0; i<=diff;i++){
    if(haystack.substring(i,needle.length+i)==needle){
      return i;
    }
  }
  return -1;
};
// stringObject.substring(start,stop)  (不包括stop位置)
// start	必需。一个非负的整数，规定要提取的子串的第一个字符在stringObject中的位置。
// stop	可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多1。
// 如果省略该参数，那么返回的子串会一直到字符串的结尾。

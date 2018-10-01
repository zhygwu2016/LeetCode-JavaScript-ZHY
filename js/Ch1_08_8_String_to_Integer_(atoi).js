/*
8. String to Integer (atoi)
https://leetcode.com/problems/string-to-integer-atoi/description/

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until
the first non-whitespace character is found. Then, starting from this character,
takes an optional initial plus or minus sign followed by as many numerical
digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral
number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral
number, or if no such sequence exists because either str is empty or it contains
only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:
Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers
within the 32-bit signed integer range: [−2^31,  2^31 − 1].
If the numerical value is out of the range of representable values,
INT_MAX (2^31 − 1) or INT_MIN (−2^31) is returned.

Example 1:
Input: "42"
Output: 42

Example 2:
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
Then take as many numerical digits as possible, which gets 42.

Example 3:
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

Example 4:
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical
digit or a +/- sign. Therefore no valid conversion could be performed.

Example 5:
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
Thefore INT_MIN (−2^31) is returned.
*/

// 1.
/*
The heart of this problem is dealing with overflow. A direct approach is to
store the number as a string so we can evaluate at each step if the number
had indeed overflowed.
There are some other ways to detect overflow that requires knowledge about how a
specific programming language or operating system works.
A desirable solution does not require any assumption on how the language works.
In each step we are appending a digit to the number by doing a multiplication
and addition. If the current number is greater than 214748364, we know it is
going to overflow. On the other hand, if the current number is equal to 214748364,
we know that it will overflow only when the current digit is greater than or
equal to 8. Remember to also consider edge case for the smallest number,
–2147483648 (–2^31).
*/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();
  var i=0, n=str.length;
  var maxVal = Math.pow(2,31)-1;
  var minVal = -Math.pow(2,31);
  var maxDiv10 = Math.floor(maxVal/10);

  var sign = 1;
  if (i<n && str.charAt(i) =='+'){
    sign = 1;
    i++;
  }else if(i<n && str.charAt(i) =='-'){
    sign = -1;
    i++;
  }

  var num = 0;
  // get the first character
  // Unicode for number 0-9 is 48-57
  var digit = str.charCodeAt(i)-48;
  // when digit is a number (0-9)
  while( i<n && (digit<=9 && digit>=0)){
    // if the result number will overflow
    if(num > maxDiv10 || num == maxDiv10 && digit >= 8 ){
      return sign==1 ? maxVal : minVal;
    }
    num = 10*num + digit;
    i++;
    // get the next character value
    digit = str.charCodeAt(i)-48;
  }
  return sign*num;
};
//console.log(myAtoi('    -42'));


//2.
var myAtoi = function(str) {
  var maxVal = Math.pow(2,31)-1;
  var minVal = -Math.pow(2,31);

  if(str.length===0 || isNaN(parseInt(str))){
    return 0;
  }
  if(parseInt(str)>maxVal){
    return maxVal;
  }
  if(parseInt(str)<minVal){
    return minVal;
  }
  return parseInt(str);
};

//3.
var myAtoi = function(str) {
  const match = str.match(/^\s*([+-]?\d+)/g);
  return match ? Math.min(2147483647, Math.max(-2147483648, match[0])) : 0;
};
// .match() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
/*
If the regular expression does not include the g flag, str.match() will return
the same result as RegExp.exec(). The returned Array has an extra input property,
which contains the original string that was parsed. In addition, it has an index
property, which represents the zero-based index of the match in the string.

If the regular expression includes the g flag, the method returns an Array
containing all matched substrings rather than match objects.
Captured groups are not returned. If there were no matches, the method returns null.
即，上面的代码中，正则表达式后面没有g,最后得出的数组match长度为2；加了g，长度为2，用match[1]
*/

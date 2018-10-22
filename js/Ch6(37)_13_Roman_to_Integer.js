/*
13. Roman to Integer
https://leetcode.com/problems/roman-to-integer/description/

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000

For example, two is written as II in Roman numeral, just two one's added together.
Twelve is written as, XII, which is simply X + II.
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:
  · I can be placed before V (5) and X (10) to make 4 and 9.
  · X can be placed before L (50) and C (100) to make 40 and 90.
  · C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.

Example 1:
Input: "III"
Output: 3

Example 2:
Input: "IV"
Output: 4

Example 3:
Input: "IX"
Output: 9

Example 4:
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

};

/*
Let’s work through some examples. Assume the input is “VII”, using the [additive
notation], we could simply add up each roman literal, ‘V’ + ‘I’ + ‘I’ = 5 + 1 + 1 = 7.
Now let’s look at another example input “IV”. Now we need to use the [subtractive
notation]. We first look at ‘I’, and we add 1 to it. Then we look at ‘V’ and since a
smaller roman literal ‘I’ appears before it, we need to subtract ‘I’ from ‘V’. Remember
that we already added another ‘I’ before it, so we need to subtract a total of two one’s
from it.
Below is a more complex example that involves both additive and subtractive notation:
“MXCVI”.

Roman literals from left to right          Accumulated total
M                                          1000
MX                                         1000 + 10 = 1010
MXC                                        1010 + (100 – 2 * 10) = 1010 + 80 = 1090
MXCV                                       1090 + 5 = 1095
MXCVI                                      1095 + 1 = 1096
*/

// 1.
var map = new Map([
  ['I', 1],['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]
]);
var romanToInt = function(s) {
  var prev = 0, total = 0;
  for(let i = 0; i<s.length; i++){
    var curr = map.get(s[i]);
    total += (curr > prev)? (curr-2*prev) : curr;
    prev = curr;
  }
  return total;
};

// 2.
var values = {
  'I':1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};
var romanToInt = function(s) {
  var prev = 0, total = 0;
  for(let i = 0; i<s.length; i++){
    var curr = values[s[i]];
    total += (curr > prev)? (curr-2*prev) : curr;
    prev = curr;
  }
  return total;
};

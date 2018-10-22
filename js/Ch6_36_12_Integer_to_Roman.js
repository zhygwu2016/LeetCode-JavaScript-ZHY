/*
12. Integer to Roman
https://leetcode.com/problems/integer-to-roman/description/

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

Given an integer, convert it to a roman numeral.
Input is guaranteed to be within the range from 1 to 3999.

Example 1:
  Input: 3
  Output: "III"

Example 2:
  Input: 4
  Output: "IV"

Example 3:
  Input: 9
  Output: "IX"

Example 4:
  Input: 58
  Output: "LVIII"
  Explanation: L = 50, V = 5, III = 3.

Example 5:
  Input: 1994
  Output: "MCMXCIV"
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

};

/*
First, let’s understand how to read roman numerals. The rule of roman numerals is
simple: Symbols are placed from left to right starting with the largest, and we add the
values according to the additive notation. However, there is an exception to avoid four
symbols being repeated in succession, also known as the subtractive notation.

The additive notation:
We combine the symbols and add the values. For example, III is three ones, which is 3.
Another example XV means ten followed by a five, which is 15.

The subtractive notation:
Four characters are avoided being repeated in succession (such as IIII). Instead, the
symbol I could appear before V and X to signify 4 (IV) and 9 (IX) respectively. Using the
same pattern, we observe that X could appear before L and C to signify 40 (XL) and 90
(XC) respectively. The same pattern could be applied to C that is placed before D and M.
With our understanding of roman numerals, we have to decide how to extract the digits
from the integer. Should we extract from right to left (from the least significant digit) or
from left to right (from the most significant digit)?
If digits are extracted from right to left, we have to append the symbols in reversed order.
Extracting digits from left to right seem more natural. It is also slightly trickier but not if
we know the maximum number of digits could the number have in advanced, which we
do – The number is within the range from 1 to 3999.

Using the additive notation, we convert to roman numerals by breaking it so each chunk
can be represented by the symbol entity. For example, 11 = 10 + 1 = “X” + “I”. Similarly,
6 = 5 + 1 = “V” + “I”. Let’s take a look of an example which uses the subtractive
notation: 49 = 40 + 9 = “XL” + “IX”. Note that we treat “XL” and “IX” as one single
entity to avoid dealing with these special cases to greatly simplify the code.
*/
var intToRoman = function(num) {
  var values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4,
    1
  ];
  var symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV",
    "I"
  ];
  var result = "";
  var i = 0;
  while(num>0){
    var k = parseInt(num/values[i]);
    for(let j=0; j<k; j++){
      result += symbols[i];
      num -= values[i];
    }
    i++;
  }
  return result;
};

//https://leetcode.com/problems/integer-to-roman/discuss/6274/Simple-Solution
var intToRoman = function(num) {
  var M = ["", "M", "MM", "MMM"];
  var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var result = M[parseInt(num/1000)] +
               C[parseInt((num%1000)/100)] +
               X[parseInt((num%100)/10)] +
               I[parseInt(num%10)];
  return result;
};

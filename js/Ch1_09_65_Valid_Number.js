/*
65. Valid Number
https://leetcode.com/problems/valid-number/description/

Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous.
You should gather all requirements up front before implementing one.
However, here is a list of characters that can be in a valid decimal number:
Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."

Of course, the context of these characters also matters in the input.
*/

/*
Solution:
This problem is very similar to Question [8. String to Integer (atoi)]. Due to
many corner cases, it is helpful to break the problem down to several components
that can be solved individually.
A string could be divided into these four substrings in the order from left to right:
  s1. Leading whitespaces (optional).
  s2. Plus (+) or minus (–) sign (optional).
  s3. Number.
  s4. Optional trailing whitespaces (optional).
We ignore s1, s2, s4 and evaluate whether s3 is a valid number. We realize that
a number could either be a whole number or a decimal number. For a whole number,
it is easy: We evaluate whether s3 contains only digits and we are done.
On the other hand, a decimal number could be further divided into three parts:
  a. Integer part
  b. Decimal point
  c. Fractional part
The integer and fractional parts contain only digits. For example, the number
“3.64” has integer part (3) and fractional part (64). Both of them are optional,
but at least one of them must present. For example, a single dot ‘.’ is not a
valid number, but “1.”, “.1”, and “1.0” are all valid. Please note that “1.”
is valid because it implies “1.0”.
By now, it is pretty straightforward to translate the requirements into code,
where the main logic to determine if s3 is numeric from line 6 to line 17.

Further Thoughts:
A number could contain an optional exponent part, which is marked by a character
‘e’ followed by a whole number (exponent). For example, “1e10” is numeric.
Modify the above code to adapt to this new requirement.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
//1. based an LeetCode book java code
var isNumber = function(s) {
  var i=0, n = s.length;
  // var spaceBoolean = /\s/.test(s.charAt(i));
  // var digit = /\d/.test(s.charAt(i));
  // 本来想把上两行先写出来后面替换比较方便，后来发现这样不行。i不会变化了所以不能放在这里图省事
  while(i<n && /\s/.test(s.charAt(i))){
    i++;
  }
  if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')){
    i++;
  }
  var result = false;
  while (i < n && /\d/.test(s.charAt(i))) {
    i++;
    result = true;
  }
  if (i < n && s.charAt(i) == '.') {
    i++;
    while (i < n && /\d/.test(s.charAt(i))) {
      i++;
      result = true;
    }
  }
  if (result==true && i < n && s.charAt(i) == 'e') {
    i++;
    result = false;
    if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) i++;
    while (i < n && /\d/.test(s.charAt(i))) {
    i++;
    result = true;
    }
  }
  while(i<n && /\s/.test(s.charAt(i))){
    i++;
  }
  return result && i==n;
};


//2. Regualr Expressions
var isNumber = function(s) {
  var regEx = /^[+-]?((\d+\.?\d*)|(\.\d+))(([eE][+-]?)?\d+)?$/;
  return regEx.test(s.trim());
};

// RegExpObject.test(string)
// 如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false

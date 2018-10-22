/*
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/description/

Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/*
Solution:
The most intuitive approach is to first represent the integer as a string, since it is more
convenient to manipulate. Although this certainly does work, it violates the restriction of
not using extra space. (ie, you have to allocate n characters to store the reversed integer as
string, where n is the maximum number of digits). I know, this sound like an
unreasonable requirement (since it uses so little space), but don’t most interview
problems have such requirements?
Another approach is to first reverse the number. If the number is the same as its reversed,
then it must be a palindrome. You could reverse a number by doing the following:

public int reverse(int num) {
assert num >= 0; // for non-negative integers only.
int rev = 0;
while (num != 0) {
rev = rev * 10 + num % 10;
num /= 10;
}
return rev;
}

This seemed to work too, but did you consider the possibility that the reversed number
might overflow? If it overflows, the behavior is language specific (For Java the number
wraps around on overflow, but in C/C++ its behavior is undefined). Yuck.
Of course, we could avoid overflow by storing and returning a type that has larger size
than int (ie, long long). However, do note that this is language specific, and the larger
type might not always be available on all languages.
We could construct a better and more generic solution. One pointer is that, we must start
comparing the digits somewhere. And you know there could only be two ways, either
expand from the middle or compare from the two ends.
It turns out that comparing from the two ends is easier. First, compare the first and last
digit. If they are not the same, it must not be a palindrome. If they are the same, chop off
one digit from both ends and continue until you have no digits left, which you conclude
that it must be a palindrome.
Now, getting and chopping the last digit is easy. However, getting and chopping the first
digit in a generic way requires some thought. I will leave this to you as an exercise.
Please think your solution out before you peek on the solution below.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0) return false;
  var div=1;
  while(x/div>=10){
    div*=10;
  }
  while(x!=0){
    l = parseInt(x/div);
    // var l = Math.floor(x/div);
    r = x%10;
    if(l!==r) return false;
    x = parseInt( (x%div)/10 );
    div = div/100;
  }
  return true;
};

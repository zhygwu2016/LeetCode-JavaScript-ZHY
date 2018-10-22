/*
Chapter 2: Math

7. Reverse Integer
https://leetcode.com/problems/reverse-integer/description/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers
within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0
when the reversed integer overflows.
*/

/* 1.
Solution:
Let’s start with a simple implementation. We do not need to handle negative integers
separately, because the modulus operator works for negative integers as well (e.g., –43 %
10 = –3).

public int reverse(int x) {
  int ret = 0;
  while (x != 0) {
    ret = ret * 10 + x % 10;
    x /= 10;
    // int x, Java里除以10自动取整
  }
  return ret;
}

There is a flaw in the above code – the reversed integer could overflow/underflow. Take
x = 1000000003 for example. To check for overflow/underflow, we could check if ret >
214748364 or ret < –214748364 before multiplying by 10. On the other hand, if ret ==
214748364, it must not overflow because the last reversed digit is guaranteed to be 1 due
to constraint of the input x.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var ret = 0;
  while(x!=0){
    // handle overflow/underflow
    if(Math.abs(ret)>214748364){
      return 0;
    }
    ret=ret*10+x%10;
    //x= x>0? Math.floor(x/10) : Math.ceil(x/10);
    x=(x/10)|0; //取整
  }
  return ret;
};


// 2.
var reverse = function(x) {
  result = parseInt(x.toString().split('').reverse().join(''),10);
  if(result > Math.pow(2,31) - 1 || -result < Math.pow(-2, 31) - 1) return 0;
  return x > 0 ? result : -result;
};

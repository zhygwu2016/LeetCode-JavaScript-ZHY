/*
66. Plus One
https://leetcode.com/problems/plus-one/description/

Given a non-empty array of digits representing a non-negative integer,
plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list,
and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/*
Solution:
Iterate from the least significant digit, and simulate by adding one to it. Adding one to a
digit less than nine is straightforward – Add one to it and we are done.
On the other hand, adding one to a digit of 9 brings it to 10, so we set the digit to 0 and
continues with a carry digit of one to its left digit. Notice this recursive behavior? Yes,
we are adding one again to its left digit and this behavior continues until the most
significant digit.
Finally, be sure that you handle the edge case where each digit of the number is 9.

When all digits are 9, we did something slightly strange (See line 11). We append the
digit 0 and modify the most significant digit to 1. Some of you might ask why not insert 1
to the front of list? Assume that the list is implemented as an ArrayList, appending an
element is far more efficient than inserting to the front, because all elements have to be
shifted one place to the right otherwise.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for(var i = digits.length-1; i>=0; i--){
    if (digits[i]<9){
      digits[i] += 1;
      return digits;
    }else{
      digits[i]=0;
    }
  }
  // unshift() Add new items to the beginning of an array:
  digits.unshift(1);
  return digits;
  // return [1, ...digits];
};

/*
unshift/push - add an element to the beginning/end of an array
shift/pop - remove and return the first/last element of and array
   unshift -> array <- push
   shift   <- array -> pop
*/

//2.
var plusOne = function(digits) {
    let carry = 1;
    for(let i= digits.length-1; i>=0 ; i--) {
        digits[i]  = digits[i] + carry;
        if(digits[i]  > 9) {
            carry = parseInt(digits[i] /10);
            digits[i]  = digits[i] % 10;
        } else {
            carry = 0;
        }
    }
    return (carry === 0 ) ? digits : digits.unshift(carry);
};

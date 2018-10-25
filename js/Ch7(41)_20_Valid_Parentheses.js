/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/description/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

};

/*
Solution:
To validate the parentheses, we need to match each closing parenthesis with its opening
counterpart. A Last-In-First-Out (LIFO) data structure such as stack is the perfect fit.
As we see an opening parenthesis, we push it onto the stack. On the other hand, when we
encounter a closing parenthesis, we pop the last inserted opening parenthesis from the
stack and check if the pair is a valid match.
It would be wise to avoid writing multiple if statements when matching parentheses, as
your interviewer may think that you are writing sloppy code. You could use a map, which
is more maintainable.
*/
var isValid = function(s) {
  var map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  // var map = new Map([
  //   ['(', ')'],
  //   ['[', ']'],
  //   ['{', '}']
  // ]);
  var stack = [];

  for(var c of s){
    if(map.has(c)){
      stack.push(c);
    }else if(!stack.length || map.get(stack.pop())!=c){
      return false;
    }
  }
  return !stack.length;
};

/*
Chapter 7: Stack

155. Min Stack
https://leetcode.com/problems/min-stack/description/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {

};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*
Solution:

O(n) runtime, O(n) space – Extra stack:
Consider using an extra stack to keep track of the current minimum value. During the
push operation we choose the new element or the current minimum, whichever that is
smaller to push onto the min stack.
For the pop operation, we would pop from both stacks. getMin() is then reflected by the
top element of min stack.
To illustrate this idea, we push the elements 1, 4, 3, 0, 3 in that order.

  Main stack    Min stack
      3            0
      0            0
      3            1
      4            1
      1            1

After popping two elements from the stack it becomes:

  Main stack    Min stack
      3            1
      4            1
      1            1

O(n) runtime, O(n) space – Minor space optimization:
If a new element is larger than the current minimum, we do not need to push it on to the
min stack. When we perform the pop operation, check if the popped element is the same
as the current minimum. If it is, pop it off the min stack too.
*/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  var min = this.getMin();
  if(min == null || x<=min){
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if(this.stack.pop() == this.getMin()){
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length-1];
};

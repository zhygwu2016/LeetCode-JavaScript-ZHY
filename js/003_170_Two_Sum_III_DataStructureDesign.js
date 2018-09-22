/*
170. Two Sum III - Data structure design
https://leetcode.com/problems/two-sum-iii-data-structure-design/description/

Design and implement a TwoSum class. It should support the following operations:
add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

Example 1:
add(1); add(3); add(5);
find(4) -> true
find(7) -> false

Example 2:
add(3); add(1); add(2);
find(3) -> true
find(6) -> false

*/

// about "Map"
// https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345007434430758e3ac6e1b44b1865178e7aff9082e000

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
  this.hashMap = new Map();
  //hashMap(key,value)
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.hashMap[number] = this.hashMap[number] || 0;
  this.hashMap[number]++;
  // x = x || 0
  // 0, undefined, null, '' are return to 0
  // https://stackoverflow.com/questions/21273498/what-is-the-purpose-of-x-x-0
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for(var key in this.hashMap) {
    var left = value - parseInt(key);

    if(left === parseInt(key)){
      if(this.hashMap[left] >= 2) {
        return true;
      }
    } else if(this.hashMap[left] >= 1) {
      return true;
    }

  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

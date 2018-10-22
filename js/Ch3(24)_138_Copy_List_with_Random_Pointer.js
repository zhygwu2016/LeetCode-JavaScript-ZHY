/*
138. Copy List with Random Pointer
https://leetcode.com/problems/copy-list-with-random-pointer/description/

A linked list is given such that each node contains an additional random pointer
which could point to any node in the list or null.

Return a deep copy of the list.
*/

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {

};

// 1. Brute force - O(n^2) runtime, O(n) space
/*
To get started, it is helpful to label each individual node with an index. According to the
above list, node 0’s random points to node 1, node 1’s random point to node 0, and node
2’s random points to itself, node 2.
We could rebuild the structure assume we have the above connections. As we know that
node 0 random points to node 1, we need to connect the cloned version from node 0' to
node 1'. We would have to iterate over the list each time to link the nodes and it takes
O(n), making the overall time complexity O(n^2).
How do we represent the connection? We can build a map that maps the original node to
its indices. Having this map will allow us to clone the structure. If we know that node 0’s
random points to node 1, we just have to connect them, right? The only issue is
connecting them takes O(n) complexity, because we have to traverse the cloned list to
find the node to connect.
*/

// not using map
// very stupid solution
var copyRandomList = function(head) {
  if (head == null) return null;
  var copy = new RandomListNode(head.label);
  var dummyCopy = new RandomListNode(0);
  var dummyHead = new RandomListNode(0);
  dummyCopy.next = copy;
  dummyHead.next = head;

  while (head.next != null) {
    copy.next = new RandomListNode(head.next.label);
    copy = copy.next;
    head = head.next;
  }

  copy = dummyCopy.next;
  head = dummyHead.next;
  while (head != null) {
    if (head.random != null) {
        var rand = head.random.label;
        var curr = dummyCopy.next;
        while (curr != null) {
            if (curr.label == rand) {
                copy.random = curr;
                break; // jumps out of while loop
            }
            curr = curr.next;
        }
    } else {
        copy.random = null;
    }
    copy = copy.next;
    head = head.next;
  }
  return dummyCopy.next;
};

// 2. Using map
/*
O(n) runtime, O(n) space – Hash table:
It is now natural to lead to a mapping so we can quickly lookup the node to connect. We
can easily build the map of indices to cloned nodes. Therefore, we have reduced the
complexity to O(1) when connecting the random nodes.
This had got us started, although it requires two maps. On closer inspection, it turns out
that the two maps could be shortened into one single map. We just need to map the
original node to its random node directly.
*/
// https://leetcode.com/problems/copy-list-with-random-pointer/discuss/43573/Javascript-solution

var copyRandomList = function(head) {
    var p = head;
    var dummy = new RandomListNode(0);
    var q = dummy;
    var map = new Map();

    while(p !== null) {
      q.next = new RandomListNode(p.label);
      map.set(p, q.next);
      p = p.next;
      q = q.next;
    }

    p = head;

    while(p !== null) {
        var rand = p.random;
        if(rand !== null) {
            map.get(p).random = map.get(rand);
        }
        p = p.next;
    }
    return dummy.next;
};

// 3. Modify original structure - O(n) runtime, O(1) space
/*
The above algorithm uses extra space O(n), can we not use extra space? What if we
eliminate the map? The only way is to modify the original structure. Imagine if we
modify the next node of the original node to point to its own copy.

The above algorithm uses extra space O(n), can we not use extra space? What if we
eliminate the map? The only way is to modify the original structure. Imagine if we
modify the next node of the original node to point to its own copy.

node.next.random = node.random.next;

To summarize, we need three iterations over the list:
  i. Create a copy of each of the original node and insert them in between two
     original nodes in an alternate fashion.
  ii. Assign random pointer of each node copy.
  iii. Restore the input to its original configuration.

We have achieved O(n) runtime complexity with using only constant extra space.
*/
var copyRandomList = function(head) {
  var p = head;
  while (p != null) {
    var next = p.next;
    let copy = new RandomListNode(p.label);
    p.next = copy;
    copy.next = next;
    p = next;
  }

  p = head;
  while (p != null) {
    p.next.random = (p.random != null) ? p.random.next : null;
    p = p.next.next;
  }

  p = head;
  var headCopy = (p != null) ? p.next : null;
  while (p != null) {
    let copy = p.next;
    p.next = copy.next;
    p = p.next;
    copy.next = (p != null) ? p.next : null;
  }

  return headCopy;
};

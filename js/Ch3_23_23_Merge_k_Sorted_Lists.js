/*
23. Merge k Sorted Lists
https://leetcode.com/problems/merge-k-sorted-lists/description/

Merge k sorted linked lists and return it as one sorted list.
Analyze and describe its complexity.

Example:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

};

// 1. Brute Force - Array sort approach
// NOT RECOMMENDED IN AN INTERVIEW !!!
/*
Traverse all the linked lists and collect the values of the nodes into an array.
Sort and iterate over this array to get the proper value of nodes.
Create a new sorted linked list and extend it with the new nodes.
*/
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;

  let values = [];
  for (let i = 0; i < lists.length; i++) {
    while(lists[i]) {
      values.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  values.sort((a, b) => a - b);
  //values.sort(function(a,b){return a-b});
  let node = values.length ? new ListNode(values[0]) : null;
  let head = node;
  for (let i = 1; i < values.length; i++) {
    node.next = new ListNode(values[i]);
    node = node.next;
  }
  return head;
};

// 2. Brute force O(nk^2) runtime, O(1) space:
/*
The brute force approach is to merge a list one by one. For example, if the lists = [l1, l2,
l3, l4], we first merge l1 and l2, then merge the result with l3, and finally l4.
To analyze its time complexity, we are going to assume there are a total of k lists, and
each list is of size n. There will be a total of k – 1 merge operations. The first merge
operation will be two lists of size n, therefore in the worst case there could be n + n
comparisons. The second merge operation will be two lists of size 2n and n. Notice that
each merge increase the size of the merged lists by n. Therefore, the total number of
comparisons required is 2n + 3n + 4n + … + kn = 𝑛 (𝑘(𝑘+1)/2-1) = O(nk^2).
*/

// 3. Min Heap
/*
Heap:
We could use a min heap of size k. The heap is first initialized with the smallest element
from each list. Then as we extract the nodes out from the heap, we must remember to
insert its next node into the heap. As each insert operation into the heap costs log(k) and
there are a total of nk elements, the total runtime complexity is O(nk log k).
Ignoring the extra space that is used to store the output list, we only use extra space of
O(k) due to the heap.
*/
// https://godbasin.github.io/2017/07/23/heap-sort/
// https://leetcode.com/problems/merge-k-sorted-lists/discuss/10675/My-JavaScript-Solution-Based-on-Heap
var mergeKLists = function(lists) {
  if (lists.length === 0) {
      return null;
  }
  var result = null;
  var tail = null;
  for (var i = 0; i < lists.length; i++) {
    if (lists[i] === null) {
      lists[i] = new ListNode(Number.POSITIVE_INFINITY);
    }
  }
  build_min_heap(lists);
  var rootValue = lists[0].val;
  while (isFinite(rootValue)) {
      if (result === null) {
          result = new ListNode(rootValue);
          tail = result;
      }
      else {
          tail.next = new ListNode(rootValue);
          tail = tail.next;
      }
      lists[0] = lists[0].next;
      if (lists[0] === null) {
          lists[0] = new ListNode(Number.POSITIVE_INFINITY);
      }
      min_heapify(lists, lists.length, 0);
      rootValue = lists[0].val;
  }
  return result;
};

function swap_in_array(arr, a, b) {
  if (a == b) { return; }
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function min_heapify(A, size, i) {
  // 左子节点为 2i + 1，右子节点为 2i + 2
  var l = 2 * i + 1, r = 2 * i + 2;
  var smallest = i;
  // 若子节点比节点大，则标记
  if (l < size && A[l].val < A[smallest].val) {
    smallest = l;
  }
  if (r < size && A[r].val < A[smallest].val) {
    smallest = r;
  }
  // 若标记有子节点，则交换父子位置，并递归计算
  if (smallest !== i) {
    swap_in_array(A, i, smallest);
    min_heapify(A, size, smallest);
  }
}

// build min heap
function build_min_heap(iArr) {
  var n = iArr.length;
  if (n <= 1) { return iArr; }
  else {
    for (var i = Math.floor(n / 2); i >= 0; i--) {
      min_heapify(iArr, n, i);
    }
  }
}


// 4. Divide and Conquer
/*
O(nk log k) runtime, O(1) space – Divide and conquer using two way merge:
If you still remember how merge sort works, we can use a divide and conquer mechanism
to solve this problem. Here, we apply the merge two lists algorithm from Question [21.
Merge Two Sorted Lists].
*/
var mergeKLists = function(lists) {
  if(lists === null || lists.length == 0) return lists;
  var end = lists.length - 1;
  // while(lists.length>1){
  //   lists.push(mergeTwoLists(lists.shift(), lists.pop()));
  // }
  while (end > 0) {
    var begin = 0;
    while (begin < end) {
      lists.splice(begin, 1, mergeTwoLists(lists[begin],lists[end]));
      begin++;
      end--;
    }
  }
  return lists[0];
};

function mergeTwoLists(l1, l2) {
  var dummyHead = new ListNode(0);
  var prev = dummyHead;

  while(l1!=null && l2!=null){
    if(l1.val<=l2.val){
      prev.next = l1;
      l1 = l1.next;
    }else{
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  if(l1==null) prev.next = l2;
  if(l2==null) prev.next = l1;

  return dummyHead.next;
}

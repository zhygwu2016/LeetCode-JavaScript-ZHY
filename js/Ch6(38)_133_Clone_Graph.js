/*
133. Clone Graph
https://leetcode.com/problems/clone-graph/description/

Given the head of a graph, return a deep copy (clone) of the graph.
Each node in the graph contains a label (int) and a list (List[UndirectedGraphNode])
of its neighbors.
There is an edge between the given node and each of the nodes in its neighbors.

OJ's undirected graph serialization (so you can understand error output):

Nodes are labeled uniquely.
We use # as a separator for each node, and , as a separator for node label and
each neighbor of the node.

As an example, consider the serialized graph {0,1,2#1,2#2,2}.
The graph has a total of three nodes, and therefore contains three parts as separated by #.
  1. First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
  2. Second node is labeled as 1. Connect node 1 to node 2.
  3. Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.

Visually, the graph looks like the following:

         1
        / \
       /   \
      0 --- 2
           / \
           \_/

Note: The information about the tree serialization is only meant so that you can
understand error output if you get a wrong answer.
You don't need to understand the serialization to solve the problem.
*/

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {

};

/*
Solution:
There are two main ways to traverse a graph: breadth-first or depth-first. Let’s try the
depth-first approach first, which is a recursion algorithm. Then we will look at the
breadth-first approach, which is an iterative algorithm that uses a queue.
*/

/*
1. O(n) runtime, O(n) space – Depth-first traversal:
A graph is simply represented by a graph node that serves as its starting point. In fact, the
starting point could be any other graph nodes and it does not affect the cloning algorithm.
As each of its neighbors is a graph node too, we could recursively clone each of its
neighbors and assign it to each neighbor of the cloned node. We can easily see that it is
doing a depth-first traversal of each node.
Note that the graph could contain cycles, for example a node could have a neighbor that
points back to it. Therefore, we should use a map that records each node’s copy to avoid
infinite recursion.

public UndirectedGraphNode cloneGraph(UndirectedGraphNode graph) {
  if (graph == null) return null;
  Map<UndirectedGraphNode, UndirectedGraphNode> map = new HashMap<>();
  return DFS(graph, map);
}

private UndirectedGraphNode DFS(UndirectedGraphNode graph,
Map<UndirectedGraphNode, UndirectedGraphNode> map) {
  if (map.containsKey(graph)) {
    return map.get(graph);
  }
  UndirectedGraphNode graphCopy = new UndirectedGraphNode(graph.label);
  map.put(graph, graphCopy);
  for (UndirectedGraphNode neighbor : graph.neighbors) {
    graphCopy.neighbors.add(DFS(neighbor, map));
  }
  return graphCopy;
}
*/
var cloneGraph = function(graph) {
  if(graph == null) return null;
  var map = new Map();
  return DFS(graph, map);
};

function DFS(graph, map){
  if(map.has(graph)){
    return map.get(graph);
  }
  var graphCopy = new UndirectedGraphNode(graph.label);
  map.set(graph, graphCopy);
  for(let neighbor of graph.neighbors){
    graphCopy.neighbors.push(DFS(neighbor, map));
  }
  return graphCopy;
}


/*
2. O(n) runtime, O(n) space – Breadth-first traversal:
How does the breadth-first traversal works? Easy, as we pop a node off the queue, we
copy each of its neighbors, and push them to the queue.
A straight forward breadth-first traversal seemed to work. But some details are still
missing. For example, how do we connect the nodes of the cloned graph?
The fact that B can traverse back to A implies that the graph may contain a cycle. You
must take extra care to handle this case or else your code could have an infinite loop.
Let’s analyze this further by using the below example:

  A <--> B

Assume that the starting point of the graph is A. First, you make a copy of node A (A2),
and found that A has only one neighbor B. You make a copy of B (B2) and connect
A2→B2 by pushing B2 as A2’s neighbor. Next, you find that B has A as neighbor, which
you have already made a copy of. Here, we have to be careful not to make a copy of A
again, but to connect B2→A2 by pushing A2 as B2’s neighbor. But, how do we know if a
node has already been copied?

Easy, we could use a hash table! As we copy a node, we insert it into the table. If we later
find that one of a node’s neighbors is already in the table, we do not make a copy of that
neighbor, but to push its neighbor’s copy to its copy instead. Therefore, the hash table
would need to store a mapping of key-value pairs, where the key is a node in the original
graph and its value is the node’s copy.

public UndirectedGraphNode cloneGraph(UndirectedGraphNode graph) {
  if (graph == null) return null;
  Map<UndirectedGraphNode, UndirectedGraphNode> map = new HashMap<>();
  Queue<UndirectedGraphNode> q = new LinkedList<>();
  q.add(graph);
  UndirectedGraphNode graphCopy = new UndirectedGraphNode(graph.label);
  map.put(graph, graphCopy);
  while (!q.isEmpty()) {
    UndirectedGraphNode node = q.poll();
    for (UndirectedGraphNode neighbor : node.neighbors) {
      if (map.containsKey(neighbor)) {
        map.get(node).neighbors.add(map.get(neighbor));
      } else {
        UndirectedGraphNode neighborCopy = new UndirectedGraphNode(neighbor.label);
        map.get(node).neighbors.add(neighborCopy);
        map.put(neighbor, neighborCopy);
        q.add(neighbor);
      }
    }
  }
  return graphCopy;
}
*/
var cloneGraph = function(graph) {
  if (graph == null) return null;
  var map = new Map();
  var queue = [];
  queue.push(graph);
  var graphCopy = new UndirectedGraphNode(graph.label);
  map.set(graph, graphCopy);

  while(queue.length != 0){
    var node = queue.shift();
    for(let neighbor of node.neighbors){
      if(map.has(neighbor)){
        map.get(node).neighbors.push(map.get(neighbor));
      }else{
        var neighborCopy = new UndirectedGraphNode(neighbor.label);
        map.get(node).neighbors.push(neighborCopy);
        map.set(neighbor, neighborCopy);
        queue.push(neighbor);
      }
    }
  }

  return graphCopy;
};

// https://www.cnblogs.com/Liok3187/p/4516929.html

import java.util.*;
import java.io.*;

// Node class for Tree node
class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {

	/* 
    
    class Node 
    	int data;
    	Node left;
    	Node right;
    */
    // Created class for making queue as node and distance
    static class QueueNode{
        Node node;
        int hd;
        public QueueNode(int level ,Node node){
            this.node = node;
            this.hd = level;
        }
    }
	public static void topView(Node root) {
        // Created queue of generic type 
        Queue<QueueNode> queue = new LinkedList<QueueNode>();
        // Created map of generic type of integer
        TreeMap<Integer, Integer> map = new TreeMap<Integer, Integer>();
        // Added root node to queue with 0 horizontal distance and root node
        queue.add(new QueueNode(0,root));
        // Looping over values until queue is empty
        while(!queue.isEmpty()) {
            // Removing first value from the queue
            QueueNode current = queue.poll();
            // Checking map if it contains the horizontal distance as key. If not present then add it to the map
            if(!map.containsKey(current.hd)) {
                map.put(current.hd, current.node.data);
            }
            // Checking if left node is not null. If there is left node present then add it to queue
            if(current.node.left != null) {
                queue.add(new QueueNode(current.hd - 1,current.node.left));
            }
            // Checking if right node is not null. If there is right node present then add it to queue
            if(current.node.right != null) {
                queue.add(new QueueNode(current.hd + 1,current.node.right));
            }
        }
        // Print values from the map. As, values represent the node from the tree
        for (Integer value : map.values()) {
            System.out.print(value + " ");
        }
    }

	public static Node insert(Node root, int data) {
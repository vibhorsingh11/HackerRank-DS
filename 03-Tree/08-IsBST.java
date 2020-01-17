/*
The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
     }
*/
boolean checkBST(Node root) {
    return isBSTUtil(root, Integer.MIN_VALUE,Integer.MAX_VALUE);        
}

boolean isBSTUtil(Node node, int min, int max) 
{         
    if (node == null) 
        return true; 

    if (node.data < min || node.data > max) 
        return false; 

    return (isBSTUtil(node.left, min, node.data-1) && 
            isBSTUtil(node.right, node.data+1, max)); 
} 
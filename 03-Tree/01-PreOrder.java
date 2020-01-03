

/* you only have to complete the function given below.  
Node is defined as  

class Node {
    int data;
    Node left;
    Node right;
}

*/

public static void preOrder(Node root) {
    if (root == null) 
        return; 

    /* first print data of node */
    System.out.print(root.data + " "); 

    /* then recur on left sutree */
    preOrder(root.left); 

    /* now recur on right subtree */
    preOrder(root.right); 
}
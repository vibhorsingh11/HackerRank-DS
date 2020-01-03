/*
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static int height(Node node) {
        // Write your code here.
      if (node == null) 
          return -1; 
      else 
      { 
          /* compute the depth of each subtree */
          int lDepth = height(node.left); 
          int rDepth = height(node.right); 
 
          /* use the larger one */
          if (lDepth > rDepth) 
              return (lDepth +1); 
           else 
              return (rDepth+1); 
      } 
      
  }
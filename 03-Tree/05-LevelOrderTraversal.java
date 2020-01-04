/* 
    
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static void levelOrder(Node root) {
        int h = height(root);
        int i; 
          for (i = 1; i <= h; i++) 
          { 
              printGivenLevel(root, i); 
          }
        
      }
  
      public static void printGivenLevel(Node root,int level) 
      { 
          if (root == null) 
          { 
              return; 
          } 
          if (level == 1) 
          { 
              System.out.print(root.data + " "); 
          } 
          else if (level > 1) 
          { 
              printGivenLevel(root.left, level - 1); 
              printGivenLevel(root.right, level - 1); 
          } 
      } 
  
      public static int height(Node node) {
          // Write your code here.
        if (node == null) 
            return 0; 
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
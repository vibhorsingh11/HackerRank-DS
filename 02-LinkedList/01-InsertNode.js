// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    const node = new SinglyLinkedListNode(data)
  
      if(head === null) {
          head = node
          
      } else {
          let nextNode = head
          while(true) {
              if (nextNode.next === null) {
                  nextNode.next = node
                  break
              }
          
              nextNode = nextNode.next
          }
      }
  
      return head
  }
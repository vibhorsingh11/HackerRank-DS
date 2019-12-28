// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    let current = head;
    let pre = null;
    while(true){
        if(current == null){
            break;         
        }
        console.log(current.data);     
        pre = current;
        current = current.next  
    }    
}
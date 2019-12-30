// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
    let current = head.next;
    let prev = head;
    while(prev.next !== null){
        
        if(current.data == prev.data){
            //let temp = current;            
            prev.next = current.next
            current = current.next;
        } else{
        prev = current;
        current = current.next;        
        }
    }
    return head;
}

// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    let current = head; 
    let next = null;
    let prev = null;
    let index = 0;
    while(current != null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    while(true){
        if(index == positionFromTail){
            return prev.data;
        }
        index++;
        prev = prev.next;
    }
}
// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
    let current = head;
    let next = null;
    let prev = null;
    while (current != null) { 
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
    } 
    head = prev;
    let crrents = prev;
    while (crrents != null) { 
        console.log(crrents.data); 
        crrents = crrents.next; 
    } 
}
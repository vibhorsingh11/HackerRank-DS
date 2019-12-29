// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
    let current = head;
    let prev = null;
    let next = null;
    while(current !== null){
        next = current.next
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
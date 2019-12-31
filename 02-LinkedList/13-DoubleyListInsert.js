// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
    let n = new DoublyLinkedListNode();
    n.data = data;
    if (head == null) {
        return n;
    }
    else if (data <= head.data) {
        n.next = head;
        head.prev = n;
        return n;
    }
    else {
        let rest = sortedInsert(head.next, data);
        head.next = rest;
        rest.prev = head;
        return head;
    }
}
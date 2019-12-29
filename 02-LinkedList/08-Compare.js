// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    if (llist1 == null && llist2 == null) {
    return 1;
} else if (llist1 == null || llist2 == null) {
    return 0;
}

if (llist1.data == llist2.data) {
    return CompareLists(llist1.next, llist2.next);
} else {
    return 0;
}

}
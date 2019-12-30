// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(headA, headB) {
    
    if (headA == null && headB == null) return null;
    else if (headA == null) return headB;
    else if (headB == null) return headA;
    
    if(headA.data <= headB.data)
        headA.next = mergeLists(headA.next, headB);
    
    else {
        let temp = new SinglyLinkedList();
        temp = headB;
        headB = headB.next;
        temp.next = headA;
        headA = temp;
        headA.next = mergeLists(headA.next, headB);
    }
    
    return headA;
 }
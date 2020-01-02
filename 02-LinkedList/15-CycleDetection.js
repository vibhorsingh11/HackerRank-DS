// Complete the hasCycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {
    let node = new Set();
    while(head != null){
        if(node.has(head)){
            return true;
        }
        node.add(head);
        head = head.next;
    }
    return false;
}
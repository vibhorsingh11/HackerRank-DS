// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
    let current = head;
    let index = 0;
    let pre = null;
    while(true){
        if(position == 0){
            return head.next;
        }
        if(index == position){
            let temp = current;
            pre.next = current.next;
            temp = null;
            break;
        }
        pre = current;
        current = current.next;
        index++;
    }    
    return head;
}
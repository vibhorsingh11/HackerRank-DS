// Complete the reverse function below.

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
function reverse(head) {
  let current = head;
  if(current == null) return;

  let temp = current.next;
  current.next = current.prev;
  current.prev = temp;
  if(current.prev == null){
      return current;
  } 
  return reverse(current.prev);
}
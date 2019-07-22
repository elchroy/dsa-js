/** Class representing a Linked List */

class LinkedList {

  constructor(value) {
    this.head = {value, next: null};
    this.tail = this.head;
  }
  /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  *
  * This needs to be O(1) - Constant Time
  */
  insert(value) {
    // create a new object
    let newTail = { value, next: null }

    // set the tail's next pointer to that object
    this.tail.next = newTail

    // set the tail to the new object
    this.tail = newTail


  }

  insertAtHead(value) {
    let newHead = { value, next: this.head }
    this.head = newHead
  }
  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  *
  * If you have a reference to the node, this has to be O(1) - Constant time
  * If you first have to search for the node, then this has to be O(n) - Linear time
  */
  remove() {

  }
  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
  removeTail() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    let lastVal = this.tail;
    this.tail = currentNode;
    return lastVal
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  *
  * This has to be a Linear Time operation, because you have to loop through the indices (at most) to get the value.
  */
  contains(value) {

    let currentNode = this.head;
    while (currentNode.value !== value) {
      if (currentNode === this.tail) {
        return false; // not found, at tail end
      }
      currentNode = currentNode.next;
    }
    return true
  }  
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  *
  * This has to be O(1) - Constant Time
  */
  isHead(node) {
    return node === this.head;
  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  * This has to be O(1) - Constant Time
  */
  isTail(node) {
    return node === this.tail;
  }
}

module.exports = LinkedList;
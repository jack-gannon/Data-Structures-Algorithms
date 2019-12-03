/* ---- Singly Linked List ---- */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    let current;

    // If list is empty, make the new node the head
    if (this.head === null) {
      this.head = newNode;
    } else {
      // Start at the head
      current = this.head;

      // Iterate through until the current node doesn't point to anything else
      while (current.next){
        current = current.next;
      }
      // Insert the new node as the tail/terminator
      current.next = newNode;
    }
    this.length++
    return this;
  }

  insertAt(index, data) {
    if (index > 0 && index > this.length){
      return false;
    } else {
      let newNode = new Node(data);
      let current, previous;
      current = this.head;

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        current = this.head;
        let iterator = 0;

        // Iterate to find the specified index at which to insert new node
        while (iterator < index) {
          iterator++;
          previous = current;
          current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
      }
      this.length++;
      return this;
    }
  }

  removeAt(index) {
    if (index > 0 && index > this.length) {
      return -1;
    } else {
      let current, previous, iterator = 0;
      current = this.head;
      previous = current;

      if (index === 0) {
        this.head = current.next;
      } else {
        // Iterate to find the specified index at which to remove the node
        while (iterator < index) {
          iterator++;
          previous = current;
          current = current.next;
        }

        // Remove the element 
        previous.next = current.next;
      }
      this.length--;
      return current.data;
    }
  }

  removeData(data) {
    // Start at the head
    let current = this.head;
    let previous = null;

    // Iterate over the list
    while (current !== null) {
      // Compare specified data with current node's data. 
      // If found, remove element and return true.
      if (data === current.data) {
        // If data matches head
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.length--;
        return current.element;
      }
    // If data doesn't match, move to next node
     previous = current;
     current = current.next; 
    }
    // If data is not found, return -1
    return -1;
  }

  indexOf(data) {
    let count = 0;
    let current = this.head;

    while(current !== null) {
      // Compare each node's data with the provided data
      if (current.data === data) {
        return count;
      } else {
        count++;
        current = current.next;
      }
    }
    // If data is not found, return -1
    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  printListLength() {
    console.log(this.length);
  }

  printListContents() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log(str);
  }

  
}

const list = new LinkedList;
list.insertAtBeginning("First!");
list.insertAtEnd("Second!");
list.insertAtEnd("Last!");
list.removeData("Second!");
list.printListContents();
list.printListLength();




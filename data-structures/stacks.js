class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // See what item is currently on top
  peek() {
    return this.top;
  }

  // Add item to top of stack
  push(data) {
    let newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  // Remove item from top of stack
  pop() {
    if (!this.top) {
      return false;
    } else {
      if(this.length === 1){
        this.top = null;
        this.bottom = null;
      } else {
        this.top = this.top.next;
      }
      this.length--;
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  append(value) {
    const node = new Node(value);
    let current;
    
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }
  
  prepend(value) {
    const node = new Node(value);
    
    if (this.head === null) {
      this.head = node;
    } else {
      let previousFirst = this.head;
      this.head = node;
      node.next = previousFirst;
    }
    this.size += 1;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }
  
  tail() {
    let current = this.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
    }
    return current;
  }

  at(index) {
    // returns the node at the given index;
    if (index > this.size) return `Index too large. Please enter an index smaller than ${this.size}`;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  pop() {
    this.at(this.size-2).next = null;
    this.size--;
  }
}

const list = new LinkedList();
list.append('a');
list.append('b');
console.log(list);
list.prepend('new first');
list.append('c');
console.log(list);
list.pop();
console.log(list);
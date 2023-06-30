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

  contains(value) {
    // return true if value is in list. False otherwise

    // if list is empty, return false;
    if (!this.head) return false;
    let current = this.head;
    // iterate through elements looking for the value
    while (current.next) {
      if (current.value === value) return true;
      current = current.next;
    }
    // check the final node
    if (current.value === value) return true;
    // all above failed
    return false;
  }

  find(value) {
    // returns index of node containing value, or null

    // if list is empty, return null
    if (!this.head) return null;
    // if the list does not contain the value, return null
    if (!this.contains(value)) return null;
    // iterate through the list and return the index
    let current = this.head;
    let counter = 0;
    while (counter < this.size) {
      if (current.value === value) return counter;
      current = current.next;
      counter++;
    }
  }

  toString() {
    // represent linkedList objects as strings. Thinking concat
    if (!this.head) return 'null';
    let current = this.head;
    let string = "";
    while (current.next) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }
    string += `( ${current.value} ) -> null`;
    return string;
  }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.prepend('new first');
list.append('c');
console.log(list);
console.log(list.toString());
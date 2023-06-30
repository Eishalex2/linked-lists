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
}

const list = new LinkedList();
list.append('a');
list.append('b');
console.log(list);
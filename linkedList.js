class LinkedList {
  constructor() {
    this.head = null;
  }
}

class InsertNode {
  constructor() {}
  insertNode(data) {
    this.data = data;
    this.next = this.head;
  }
}

const ll = new InsertNode();
ll.insertNode(10);
console.log(ll);

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(this.first === null) { // no hay elementos en la fila
      this.first = newNode;
      this.last = this.first;
    } else { // hay mas de un  elemento en la fila
      this.last.next = newNode;
      this.last = this.last.next;
    }
    return ++this.size;
  }

  dequeue(){
    if(this.size === 0) return null;
    let temp = this.first.value;
    if(this.first === this.last) {
      this.last = null;
  }
    this.first = this.first.next;
    this.size--;
    return temp; 
  }
}
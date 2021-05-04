class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(this.first === null) { // no hay elementos en el stack
      this.first = newNode;
      this.last = this.first;
    }
    else if(this.first){
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop(){
    let temp = this.first.value;
    if(this.first === null) return null // No hay elementos en la pila
    else if(this.size === 1) this.last = null; // un solo elemento en la lista
    this.first = this.first.next;
    this.size--;
    return temp
  }
  // else { // mas de un elemento en la lista
    //   // let current = this.first;
    //   // let nextNode = this.first.next.next;
    //   // while(nextNode !== null){
    //   //   current = current.next;
    //   //   nextNode = nextNode.next;
    //   // }
    //   // let temp = this.last.value;
    //   // this.last = current;
    //   // this.size--;
    //   // this.last.next = null;
    //   // return temp;
    // }
}
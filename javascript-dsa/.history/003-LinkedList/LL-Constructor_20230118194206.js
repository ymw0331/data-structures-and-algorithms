class Node
{
  constructor ( value )
  {
    this.value = value;
    this.next = null;
  }
}



class LinkedList
{
  constructor ( value )
  {
    constructor(value){
      const newNode = new Node(value)
      this.head = newNode
      this.tail = this.head
    }
  }
  push ( value )
  {
    // create new Node, add Node to end
  }
  unshift ( value )
  {
    // create new Node, add Node to beginning
  }
  insert ( index, value )
  {
    // create new Node, insert Node  }
  }
}
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
    const newNode = new Node( value );
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}
push( value );
{
  // create new Node, add Node to end
}
unshift( value );
{
  // create new Node, add Node to beginning
}
insert( index, value );
{
  // create new Node, insert Node  }
}
}
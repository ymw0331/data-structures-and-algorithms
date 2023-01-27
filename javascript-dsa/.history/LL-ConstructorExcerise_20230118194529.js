class Node
{
constructor = {

}
}


class LinkedList
{
  // CREATE LL CONSTRUCTOR HERE //
  //                            //
  //                            //
  //                            //
  //                            //
  ////////////////////////////////


  printList ()
  {
    let temp = this.head;
    while ( temp !== null )
    {
      console.log( temp.value );
      temp = temp.next;
    }
  }

  getHead ()
  {
    if ( this.head === null )
    {
      console.log( "Head: null" );
    } else
    {
      console.log( "Head: " + this.head.value );
    }
  }

  getTail ()
  {
    if ( this.head === null )
    {
      console.log( "Tail: null" );
    } else
    {
      console.log( "Tail: " + this.tail.value );
    }
  }

  getLength ()
  {
    console.log( "Length: " + this.length );
  }

}


// DO NOT CHANGE TEST FUNCTION 
function test ()
{
  let myLinkedList = new LinkedList( 4 );

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log( "\nLinked List:" );
  myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
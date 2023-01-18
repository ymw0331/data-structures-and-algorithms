function logItems ( n )
{
  // O(n*n) = O(n^2)
  // first for loop O(n)
  for ( let i = 0; i < n; i++ )
  {  // second for loop O(n)
    for ( let j = 0; j < n; j++ )
      console.log( "i =>", i, "j =>", j );
  }


  // O(n)
  //third for loop out of nested loop
  for ( let k = 0; k < n; k++ )
  {
    console.log( "k =>", k );
  }
}

logItems( 10 );


// Add one nested for loop with another for loop
// O(n^2 + n) ==> O(n^2)
// O(n^2) is the dominant term, while O(n) is not, therefore we drop the non-dominant term

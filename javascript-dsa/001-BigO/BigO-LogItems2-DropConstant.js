function logItems ( n )
{
  // first for loop O(n)
  for ( let i = 0; i < n; i++ )
  {
    console.log( "i ==>", i );
  }

  // second for loop O(n)
  for ( let j = 0; j < n; j++ )
  {
    console.log( "j ==>", j );
  }
}

logItems( 3 );

// O(n)

// ran n + n times or 2n
// O(2n) ==> O(n) if there is a constant, drop it
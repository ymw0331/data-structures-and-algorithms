function logItems ( n )
{
  // first for loop O(n)
  for ( let i = 0; i < n; i++ )
  {  // second for loop O(n)
    for ( let j = 0; j < n; j++ )
      // {  // third for loop O(n)
      for ( let k = 0; k < n; k++ )
      {
        console.log( "i =>", i, "j =>", j, "k =>", k );
      }
  }
}



logItems( 10 );

// 2 nested for loop ==> n*n = O(n^2)
// 3 nested for loop ==> n*n*n = O(n^3)

// O(n^3) ==> simplify as O(n^2)

// O(n) code is better than O(n^2), as it completes the task in fewer operation, more efficient
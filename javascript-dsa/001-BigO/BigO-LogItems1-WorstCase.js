function logItems ( n )
{
  for ( let i = 0; i < n; i++ )
  {
    console.log( i );
  }
}

logItems( 10 );

// Best case scenario ==> Omega (uppercase Ω, lowercase ω)
// Average case scenario ==> Theta (uppercase Θ, lowercase θ)
// Worst case scenario ==> Omicron small o
// When we measuring Big O, worst case is always considered and measured


// O(n) operation, run n times, straight line
// number of opretation is proportional to whatever n is
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Recursion Example
// function printNumber ( n )
// {
//   if ( n === 0 )
//   {
//     return;
//   }

//   console.log( n );
//   printNumber( n - 1 );
// }


// Recursion Tips
// Figure out the bare minimum pieces of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? if not, return
// Do some work. Call your function again, making sure the arguments have changed in some function


// Solution #2: Recursion
function steps ( n, row = 0 )
{
  // if(row === n) then we have hit the end of our problem
  if ( n === row )
  {
    return;
  }
  
  // if the 'stair' string has a length === n then we are at the end of row
if(n === stair.length) {
  
}

  // if the length of the stair string is less than or equal to the row number, we're working on, we add a '#', otherwise add a space

}

// Solution #1
// function steps ( n )
// {

//   // 1.Form 0 to n (iterate through rows)
//   for ( let row = 0; row < n; row++ )
//   {
//     // 2. Create an empty string, 'stair'
//     let stair = '';

//     // 3. From 0 to n (iterate trough columns)
//     for ( let column = 0; column < n; column++ )
//     {
//       // 4. If the current column is equal to or less than the current row
//       // Add a '#' to 'stair'
//       if ( column <= row )
//       {
//         stair = stair + "#";
//       } else
//       {
//         // Else Add a space to 'stair'
//         stair = stair + " ";
//       }
//     }
//     console.log( stair );
//   }
// }

module.exports = steps;

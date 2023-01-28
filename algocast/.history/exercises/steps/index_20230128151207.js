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

function steps ( n )
{

// 1.Form 0 to n (iterate through rows)
// 1.1 Create an empty string, 'stair'
// 1.2 From 0 to n (iterate trough columns)
// 1.


  for ( let row = 0; row < n; row++ )
  {
    for ( let column = 0; column < n; column++ )
    {
      console.log();
    }
  }

}

module.exports = steps;

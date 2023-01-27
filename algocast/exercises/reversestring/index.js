// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse( 'apple' ) === 'leppa';
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution #2;
function reverse ( str )
{
  // 1. Create an empty string called 'reversed'
  let reversed = '';

  // 2. for each charater in the provided string, take the character and add it to the start of the reversed
  // character == temp var, str == iterable object, iterate tru each character of str one by one, set each character equal to temp 'charater'
  for ( let character of str )
  {
    reversed = character + reversed;
    debugger;
  }

  // 3. return the variable 'reversed'
  return reversed;
}

// reverse( 'hello' );

module.exports = reverse;



// Solution #1
// function reverse ( str )
// {

//   return str.split( "" ).reverse().join( "" );

//   // 1. turn str into an array
//   const arr = str.split( '' );

//   // 2. call 'reverse' method on the array
//   arr.reverse();

//   // 3. join the array back into a string
//   return arr.join( '' );
// }



// Solution #3
// function reverse ( str )
// {
//   // 1. take str, turn it into array by calling split function, then use reduce helper (reduce take all diff values within array and condense them all down to one singular value)
//   return str.split( '' ).reduce( ( rev, char ) => char + rev, '' );
// }


// Debugger Steps:
// 1. Add a 'debugger' statement in your function
// 2. Call the function manually
// 3. At the terminal, run 'node inspect index.js';
// 4. To continue execution of the file, press 'c' then 'enter';
// 5. To launch a 'repl' sessionStorage, type 'repl' then 'enter';
// 6. To exit the 'repl', press Control + C;
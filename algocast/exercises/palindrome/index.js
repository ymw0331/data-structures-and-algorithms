// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true  "abba"
//   palindrome("abcdefg") === false  "gfedcba"



// Solution #1
// function palindrome ( str )
// {
//   // reverse the string
//   const reversed = str.split( '' ).reverse().join( '' );

//   // palidrome == reversed form is equal to original form 
//   return str === reversed;

// }


// Solution #2  every() method, tests whether all elements in the array pass the test implemented by the provided function
function palindrome ( str )
{
  // turn string into an array
  return str.split( '' ).every( ( char, i ) =>
  {
    // array is 0 index, (- i measure every step increment thru loop, - 1 -- 0 index length)
    return char === str[ str.length - i - 1 ];
  } );
}



// Solution #3: Check palindrom using for loop
// function palindrome ( str )
// {
//   // find the length of the string
//   const len = str.length;

//   // loop thru half of the string
//   for ( let i = 0; i < len / 2; i++ )
//   {
//     // check if first and last string are same
//     if ( str[ i ] !== str[ len - 1 - i ] )
//     {
//       return false;
//     }
//   }
//   return true;
// }


module.exports = palindrome;

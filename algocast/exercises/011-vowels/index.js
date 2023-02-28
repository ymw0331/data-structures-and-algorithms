// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #2 (regex solution)
// function vowels( str ) {
//   const matches = str.match( /[aeiou]/gi ) //g - dont stop at first search , i - insensitive
//   return matches ? matches.length : 0 // true: array with length, false: 0

// }


// Solution #1 (iterative solution)
function vowels( str ) {

  let count = 0;
  const vowelChecker = [ 'a', 'e', 'i', 'o', 'u' ]

  for ( let char of str.toLowerCase() ) {
    if ( vowelChecker.includes( char ) ) {
      count++
    }
  }
  return count
}


module.exports = vowels;
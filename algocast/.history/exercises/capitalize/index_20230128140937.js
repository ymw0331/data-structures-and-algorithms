// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// Example of how to split a string
// const sentence = "Hi there buddy!";
// sentence.split( " " ); //split by empty space

// Solution #2
function capitalize ( str )
{
  // 1. Create an empty string called 'result'
  // 1. Create 'result' which is the first character of the input string capitalized
  const result = [0];

  // 2. For each character in the string
  for ( let i = 0; i < str.length; i++ )
  {
    // 2.1 If the character to the left a space, if there is a space means it is a CAPITAL LETTER
    // 2.1.1 Capitalize it and add it to 'result'

    // 2.2 Else Add it to 'result'


  }


}

module.exports = capitalize;



// Solution #1
// function capitalize ( str )
// {

//   // 1. Make an empty array "words"
//   const words = [];

//   // 2. Split the input string by spaces to get an array
//   str.split( "" );

//   // 3. For each word in the array
//   for ( let word of str.split( " " ) ) //split str string by " " space
//   {
//     // 3.1 Uppercase the first letter of the word
//     // 3.2 Joing first letter with rest of the string
//     // 3.3 Push result into "words" array
//     words.push(
//       word[ 0 ].toUpperCase() + word.slice( 1 )//get everything from index 1 to last element of word
//     );

//   }

//   // 4. Join 'words' into a string and return it
//   return words.join( ' ' );

// }
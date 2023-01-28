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

// Solution #1
function capitalize ( str )
{

  // 1. Make an empty array "words"
  const words = [];

  // 2. Split the input string by spaces to get an array
  str.split( "" );

  // 3. For each word in the array
  for ( let word of str.split( " " ) ) //split str 
  {
    // 3.1 Uppercase the first letter of the word
    word[ 0 ].toUpperCase();

    // 3.2 Joing first letter with rest of the string


    // 3.3 Push result into "words" array

  }

  // 4. Join 'words' into a string and return it

}

module.exports = capitalize;

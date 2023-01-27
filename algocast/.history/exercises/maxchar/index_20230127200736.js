// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common string questions
// 1. What is the most common character in the string?
// 2. Does string A have the same characters as string B (is it an anagram?)
// 3. Does the given string have any repeated characters in it? 


// Counting or verifying numbers of charater in a string, we take a string and convert it into an object, key is char of string, value is number of times charater found
// Ex: "Hello There!" => { H:1, e:3, l:3, o:1, "":1, t:1, h:1, r:1, !:1}

function maxChar ( str )
{

  const charMap = {};
  let max = 0;
  let maxChar = '';

  
  for ( let char of str )
  {
    if ( charMap[ char ] )
    {
      charMap[ char ]++;
    } else
    {
      charMap[ char ] = 1;
    }
  }
  // console.log( charMap );

  for(let char )

}


module.exports = maxChar;

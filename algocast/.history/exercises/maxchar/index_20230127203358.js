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

  // 1. Create an object to store all characters
  const stringObj = {};
  let maxValue = 0;
  let maxChar = '';

  // 2. Run a for-of loop throght the input String
  // for let is to iterate thru array or string (iterable object)
  for ( let char of str )
  {
    if ( stringObj[ char ] )
    {
      // 3. Add the count of the character map with the count of occurrence of every character of the String
      stringObj[ char ]++;
    } else
    {
      stringObj[ char ] = 1;
    }
  }
  // console.log( stringObj );

  // 4. Run a for-in loop through character map
  // use in to iterate object
  for ( let char in stringObj )
  {
    // 5. Compare each character to the current maximum occurence
    if ( stringObj[ char ] > maxValue )
    {
      maxValue = stringObj[ char ];
      maxChar = char;
    }
  }

  // 6. Return the max number occured number
  return maxChar;
}





module.exports = maxChar;

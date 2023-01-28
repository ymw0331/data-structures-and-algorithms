// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const word = "HI THRERE!!!";
// word.replace( /[^\w]/g, "" ).toLowerCase(); //regex


// const obj = { a: 1, b: 1, c: 1 };
// Object.keys( obj );

const numbers = [ 100, 20.5, - 90, 10000 ];
numbers.sort()

function anagrams ( stringA, stringB )
{


}

module.exports = anagrams;



// function anagrams ( stringA, stringB )
// {
//   const aCharMap = buildCharMap( stringA );
//   const bCharMap = buildCharMap( stringB );

//   // check if they have same number of characters
//   if ( Object.keys( aCharMap ).length !== Object.keys( bCharMap ).length )
//   {
//     return false;
//   }

//   // map checking process, check number of character same with another anot
//   // iterate over one charmap compare with another, iterate over an array use "of", if object use "in"
//   for ( let char in aCharMap )
//   {
//     if ( aCharMap[ char ] !== bCharMap[ char ] )
//     {
//       return false;
//     }
//   }
//   return true;
// }

// // build characte map (string object)
// function buildCharMap ( str )
// {
//   const charMap = {};
//   for ( let char of str.replace( /[^\w]/g, '' ).toLowerCase() )
//   {
//     charMap[ char ] = charMap[ char ] + 1 || 1;
//   }
//   return charMap;
// }


// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// slice(startIndex, endIndex)
// const letters = [ 'a', 'b', 'c', 'd', 'e' ];
// letters.slice( 0, 3 ); //get letters from index 0 to 3 not including it

// Solution #2
function chunk ( array, size )
{
  // 1. Create empty 'chunked' array
  const chunked = [];
  // 2. Create 'index' start at 0
index
  // 3. While index is less than array.length

  // 3.1 Push a slic of length 'size' from 'array' into 'chunked'
  // 3.2 Add 'size' to 'index' 


}

module.exports = chunk;





// Solution #1
// function chunk ( array, size )
// {
//   // 1. Create empty array to hold chunks called 'chunked'
//   const chunked = [];

//   // 2. For each element in the "unchunked" array
//   for ( let element of array )
//   {
//     // 2.1 Retrieve the last element in 'chunked'
//     const last = chunked[ chunked.length - 1 ];
//     // 2.2 If last element does not exist, or if its length is equal to chunk size
//     if ( !last || last.length === size )
//     {
//       // 2.3 Push a new chunk into 'chunked' with the current element
//       chunked.push( [ element ] );
//     } else
//     {
//       // Else add the current element into the chunk
//       last.push( element );
//     }

//   }
//   return chunked;
// }


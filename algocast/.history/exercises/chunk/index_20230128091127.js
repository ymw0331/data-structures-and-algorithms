// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #1
function chunk ( array, size )
{
  // 1. Create empty array to hold chunks called 'chunked'
  // 2. For each element in the "unchunked" array 
        // 2.1 Retrieve the last element in 'chunked'
        // 2.2 If last element does not exist, or if its length is equal to chunk size
            // Push a new chunk into 'chunked' with 



}

module.exports = chunk;

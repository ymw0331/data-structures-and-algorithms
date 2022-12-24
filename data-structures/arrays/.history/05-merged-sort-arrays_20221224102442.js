// var mergeSortedArrays = ([0, 3, 4, 31], [4, 6, 30]);
// [0,3,4,4,6,30,31]

// Merge helper function
// function merge(leftArr, rightArr) {
//   let sortedArr = []

//   while (leftArr.length && rightArr.length) {
//     // Insert the smallest item into sortedArr
//     if (leftArr[0] < rightArr[0]) {
//       sortedArr.push(leftArr.shift())
//     } else {
//       sortedArr.push(rightArr.shift())
//     }
//   }

//   // Use spread operators to create a new array, comibing the three arrays
//   return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(merge([0, 3, 4, 31], [4, 6, 30]))


// function mergeSort(arr) {
//   // Base case
//   if (arr.length <= 1) return arr
//   let mid = Math.floor(arr.lenght / 2)

//   // Recursive calls
//   let leftArr = mergeSort(arr.slice(0, mid))
//   let rightArr = mergeSort(arr.slice(mid))

//   return merge(leftArr, rightArr)
// }

// console.log(mergeSort([3, 5, 8, 5, 99, 1]))

// https://www.doabledanny.com/merge-sort-javascript


// var mergeSortedArrays = ([0, 3, 4, 31], [4, 6, 30]);
// [0,3,4,4,6,30,31]

// Merge helper function
// function merge(leftArr, rightArr) {
//   let sortedArr = []

//   while (leftArr.length && rightArr.length) {
//     // Insert the smallest item into sortedArr
//     if (leftArr[0] < rightArr[0]) {
//       sortedArr.push(leftArr.shift())
//     } else {
//       sortedArr.push(rightArr.shift())
//     }
//   }

//   // Use spread operators to create a new array, comibing the three arrays
//   return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(merge([0, 3, 4, 31], [4, 6, 30]))


// function mergeSort(arr) {
//   // Base case
//   if (arr.length <= 1) return arr
//   let mid = Math.floor(arr.lenght / 2)

//   // Recursive calls
//   let leftArr = mergeSort(arr.slice(0, mid))
//   let rightArr = mergeSort(arr.slice(mid))

//   return merge(leftArr, rightArr)
// }

// console.log(mergeSort([3, 5, 8, 5, 99, 1]))


function mergeSortedArrays ( array1, array2 )
{
  const mergedArray = [];
  let array1Item = array1[ 0 ];
  let array2Item = array2[ 0 ];
  let i = 1;
  let j = 1;

  // Check input
  if ( array1.length === 0 )
  {
    return array2;
  }

  if ( array2.length === 0 )
  {
    return array1;
  }


  while ( array1Item || array2Item )
  {

    // console.log(array1Item, array2Item)

    if ( array1Item < array2Item )
    {
      mergedArray.push( array1Item );
      array1Item = array1[ i ];
      i++;
    } else
    {
      mergedArray.push( array2Item );
      array2Item = array2[ j ];
      j++;
    }
  }

  return mergedArray;
}

consle.log( mergeSortedArrays( [ 0, 3, 4 ], [ 4, 6, 30 ] ) )



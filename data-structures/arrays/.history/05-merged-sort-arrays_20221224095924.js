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

}



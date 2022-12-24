const strings =
  [ 'a', 'b', 'c', 'd' ];
//  0    1    2    3

// 4*4 = 16 bytes of storage
console.log( 'Access element at index 2: ', strings[ 2 ] );

// push, add at the end of array
strings.push( 'e' ); //O(1) operation
console.log( `Add new element 'e' at the end of array: `, strings );

// pop
strings.pop(); //O(1) operation
strings.pop();
console.log( 'Pop two elements at the end of the strings:', strings );

// unshift
strings.unshift( 'x' ); //iterate everyhing an reassign of the index (O(n))
console.log( 'Add x at the beginning of the array：Add x at the beginning of t', strings );


// splice 
strings.splice( 2, 0, 'alien' ); //O(n/2) == O(n)
console.log( strings );


// Array methods (big-o)
// lookup(O(1))
// push(O(1))
// insert(O(n))
// delete(O(n))
// insert and delete need to loop thru the array, so it depends on the length(n) of the array

// array declaration in C++
// int a[20]; //array with space of 20 items
// int b[5] { 1, 2, 3, 4, 5 }cd 
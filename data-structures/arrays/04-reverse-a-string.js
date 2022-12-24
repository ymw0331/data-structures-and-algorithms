// Create a function that reverse a string: 
// "Hi my name is Wayne" should be:
// "enyaW si eman ym iH"

// (1)Write with pre-built methods
// const strings = "Hi my name is Wayne"

// function reverse(str) {

//   var splitString = str.split("")
//   var reverseArray = splitString.reverse()
//   var joinArray = reverseArray.join("")
//   return joinArray
// }

// function reverseString(str) {
//   return str.split("").reverse().join("")
// }


// console.log(reverseString(strings))

// (2) Reverse a string with a decrementing for loop
// function reverseString(str) {

//   var newString = ""

//   for (var i = str.length - 1; i >= 0; i--) {
//     newString = newString + str[i]
//   }

//   return newString
// }

// console.log(reverseString('hello'))


// Andrei's solution
function reverse(str){
  // check input
  if(!str || str.length< 2 || typeof str !== 'string'){
    return 'not good'
  }
  const backwardArray =  []
  const totalItems = str.length -1;
  
  for(let i = totalItems; i >= 0; i--){
    backwardArray.push(str[i]);
  }
  console.log(backwardArray)
  
  return backwardArray.join("")
}


const reverse2 = str => str.split('').reverse().join('');

console.log(reverse2("Hi my name is wayen"))

let num1 = 5;
let num2 = num1;

console.log( "num1 ==>", num1 );
console.log( "num2 ==>", num2 );

num1 = 10;

console.log( "After num1 is changed:" );
console.log( "num1 ==>", num1 );
console.log( "num2 ==>", num2 );

// num1 changed, but num2 is not, because pointer is not used


let obj1 = {
  value: 11
};


let obj2 = {
  value: 11
};
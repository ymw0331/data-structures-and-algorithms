// Classes in Javascript

// reference type
// var object1 = { value: 10 }
// var object2 = object1
// var object3 = { value: 10 }
// console.log(object1 === object2)
// console.log(object1 === object3)

// object1.value = 15;
// console.log('Value of obj1', object1.value)
// console.log('Value of obj2', object2.value)
// conosle.log('Value of obj3', object3.value)


// context vs scope
// function object4() {
//   // let a = 4; //block scope
//   // console.log(a)
//   a: function a() {
//     console.log(this)
//   }
// }

// object4.a()
//context tell us where we are within the object, this refers to what object is inside it


// instantiation
// multiple copy of the object
class Player {
  constructor(name, type) {
    console.log(this)
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I am ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log()
    console.log(`WHEEE I am a ${this.type}`)
  }
}

const wizard1 = new Wizard("Shelly", "Healer")
const wizard2 = new Wizard("Shawn", "Dark Magic")
wizard1.introduce()
wizard2.introduce()


// write an array from scratch without pre-build
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) { //O(1)
    return this.data[index];
  }

  push(item) { //O(1)
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() { //O(1)
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) { //O(n)
    const item = this.data[index];
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1] //shift item to left by one
    }
    // delete this.data[this.length - 1] //last item
    // this.legnth--;
  }
}

const newArray = new MyArray();
console.log(newArray.get(0))

newArray.push('Hello')
newArray.push('Wayne')
newArray.push('!')
// newArray.pop()
newArray.delete(0)
newArray.push('are')
newArray.push('nice')

newArray.delete(1)

console.log(newArray)





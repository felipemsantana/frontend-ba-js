const obj = {
  x: 3,
  y: 2,
  subtract: function() {
    return this.x - this.y;
  },
};

function add() {
  return this.x + this.y;
}

console.log(add.call(obj)); // 5

obj.add = add;
console.log(obj.add()); // 5

console.log(obj.subtract()); // 1

const subtract = obj.subtract;
// throws TypeError in strict-mode because `this` is undefined
// returns NaN in sloppy-mode because `this` is global object
console.log(subtract()); // NaN

const bindedSubtract = obj.subtract.bind(obj);
console.log(bindedSubtract()); // 1

function MyClass() {
  this.x = 10;
  this.y = 2;
  this.divide = () => this.x / this.y;
}
const myClassInstance = new MyClass();

console.log(add.call(myClassInstance)); // 12

console.log(bindedSubtract.call(myClassInstance)); // 1

console.log(myClassInstance.divide()); // 5
// arrow functions automatically binds `this` from lexical scope
console.log(myClassInstance.divide.call(obj)); // 5

function SuperClass() {
  this.field = 'foo';
  this.print(); // 'foo'
}

SuperClass.prototype.print = function print() {
  console.log(this.field);
};


function SubClass() {
  Object.getPrototypeOf(SubClass).call(this); // 'foo'
  this.field = 'bar';
  this.print(); // 'bar'
}

SubClass.prototype = Object.create(SuperClass.prototype);
Object.setPrototypeOf(SubClass, SuperClass);


const subClassInstance = new SubClass();
console.log(subClassInstance instanceof SubClass); // true
console.log(subClassInstance instanceof SuperClass); // true

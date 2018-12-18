class SuperClass {
  constructor() {
    this.field = 'foo';
    this.print(); // 'foo'
  }

  print() {
    console.log(this.field);
  }
}


class SubClass extends SuperClass {
  constructor() {
    super(); // 'foo'
    this.field = 'bar';
    this.print(); // 'bar'
  }
}


const subClassInstance = new SubClass();
console.log(subClassInstance instanceof SubClass); // true
console.log(subClassInstance instanceof SuperClass); // true

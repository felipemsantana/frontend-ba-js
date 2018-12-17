function A() {
  this.field = 'foo';
  this.print();
}

A.prototype.print = function print() {
  console.log('Valor do campo:', this.field);
};


function B() {
  B.__proto__.call(this);
  this.field = 'bar';
  this.print();
}

B.prototype = Object.create(A.prototype);
Object.setPrototypeOf(B, A);

/* --- */

const b = new B();
console.log('b é instância de B?', b instanceof B);
console.log('b é instância de A?', b instanceof A);

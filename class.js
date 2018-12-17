class A {
  constructor() {
    this.field = 'foo';
    this.print();
  }

  print() {
    console.log('Valor do campo:', this.field);
  }
}


class B extends A {
  constructor() {
    super();
    this.field = 'bar';
    this.print();
  }
}

/* --- */

const b = new B();
console.log('b é instância de B?', b instanceof B);
console.log('b é instância de A?', b instanceof A);

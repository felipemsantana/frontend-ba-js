const primitive1 = 'some string';
const primitive2 = 'some string';

console.log(primitive1 === primitive2); // true


const object1 = {};
const object2 = {};

console.log(object1 === object2); // false


const number = 1;
const sameNumber = number;
console.log(number === sameNumber); // true


const object = { prop: 42 };

// assigning same reference
const sameObject = object;
console.log(object === sameObject); // true

sameObject.prop = 'foo';
console.log(object.prop); // 'foo'

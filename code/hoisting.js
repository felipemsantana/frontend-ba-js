console.log(hoisted); // undefined
var hoisted = 'foo';
console.log(hoisted); // 'foo'

console.log(hoistedFn()); // 'bar'
function hoistedFn() {
  return 'bar';
}

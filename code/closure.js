function lexicalScope() {
  const localConstant = 'outside value';

  function print() {
    const localConstant = 'inside value';
    console.log(localConstant);
  }

  console.log(localConstant); // 'outside value'
  print(); // 'inside value'
}
lexicalScope();

function createCounter() {
  let counts = 0;

  return function () {
    counts += 1;
    return counts;
  };
}

const count = createCounter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3


const createAdd = x => y => x + y;
// curried function
const add5 = createAdd(5);
console.log(add5(10)); // 15

function createAddAlternative(x) {
  return function (y) {
    return x + y;
  }
}

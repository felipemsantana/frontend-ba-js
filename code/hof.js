function outerFn() {
  return function innerFn() {
    return 42;
  };
}

const innerFn = outerFn();
innerFn(); // 42

const arr = [0, 1, 2, 3, 4, 5];

const even = arr.filter(n => n % 2 === 0);
console.log(even); // [0, 2, 4]

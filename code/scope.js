function fn() {
  if (true) {
    const constant = 1;
    let blockVariable = 2;
    var functionVariable = 3;
  }
  console.log(constant); // throws ReferenceError
  console.log(blockVariable); // throws ReferenceError
  console.log(functionVariable); // 3
  console.log(globalVariable); // 4
}

// "window" is the global object in the browser
global.globalVariable = 4;

fn();

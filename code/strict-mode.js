function sloppyMode() {
  // undeclared, writes in global object
  undeclared = 42;

  // read-only
  global.NaN = 'number';

  function Class() {
    // "this" is the global object
    this.field = 'foo';
  }
  // missing "new" keyword
  Class();
}
sloppyMode();

function strictMode() {
  'use strict';

  // throws error
  undeclared = 42;

  // throws error
  global.NaN = 'number';

  function Class() {
    // throws error, "this" is now "undefined"
    this.field = 'foo';
  }
  Class();
}
strictMode();

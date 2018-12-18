function functionDeclaration() {}

functionDeclaration instanceof Object; // true

functionDeclaration.field = 42;

functionDeclaration.innerFunction = function () {};
functionDeclaration.innerFunction();

const functionExpression = function () {};
const arrowFunction = () => {};
const identityArrowFunction = identity => identity;

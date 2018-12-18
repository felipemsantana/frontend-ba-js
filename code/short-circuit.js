function print(text) {
  // default value example
  console.log(text || 'default');
}

print(); // 'default'
print('value'); // 'value'


const ternary = 'condition' ? 42 : 0;
const ternaryLike = 'condition' && 42 || 0;


const firstTruthyValue = '' || 0 || false || 1 || [10];
console.log(firstTruthyValue); // 1


const obj = {
  prop: 'inner value'
};

const example1 = obj && obj.prop;
console.log(example1); // 'inner value'

// guards against TypeError
const example2 = obj && obj.missingProp && obj.missingProp.crash;
console.log(example2); // undefined

const example3 = obj && obj.missingProp || 'other value';
console.log(example3); // 'other value'

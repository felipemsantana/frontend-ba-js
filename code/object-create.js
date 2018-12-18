const personPrototype = {
  name: 'Felipe',
  middlename: 'Matos',
  lastname: 'Santana',
  age: 27,
};

const person = Object.create(personPrototype);
person.printFullName = function() {
  console.log(
    this.name,
    this.middlename,
    this.lastname
  );
};
person.printFullName(); // 'Felipe Matos Santana'

const formalPerson = Object.create(person);
formalPerson.title = 'Sir';
formalPerson.printFullName = function() {
  console.log(
    this.title,
    this.name,
    this.middlename,
    this.lastname
  );
};
formalPerson.printFullName(); // 'Sir Felipe Matos Santana'

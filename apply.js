const person = {
  greet: function(greeting){
    console.log(`${greeting}, my name is ${this.name} and i am ${this.age} years old.`);
  },
  name: `Michael`,
  age: 25
}

const anotherPerson = {
  name: `Jane`,
  age: 25
}

person.greet.apply(anotherPerson, [`Hi`]);
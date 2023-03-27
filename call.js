// const person = {
//   name: `Michael`,
//   age: 25,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name} and i am ${this.age} years old!`);
//   }
// };

// const anotherPerson = {
//   name: `Guilherme`,
//   age: 5
// };

// person.greet.call(anotherPerson);

function User(name, email){
  this.name = name;
  this.email = email;

  this.showInfos = function(){
    console.log(this.name, this.email);
  }
}

const newUser = new User(`Michael`, `michael@email.com`);

const anotherUser = {
  name: `Paula`,
  email: `paula@bol.com.br`
}

newUser.showInfos();
newUser.showInfos.call(anotherUser);
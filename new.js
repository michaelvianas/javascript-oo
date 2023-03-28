// function User(name, email) {
//   this.name = name
//   this.email = email

//   this.showInfos = function() {
//     return `${this.name}, ${this.email}`
//   }
// }

// const newUser = new User('Michael', 'michael@email.com');
// console.log(newUser.showInfos());

// function Admin(role) {
//   User.call(this, 'Michael', 'michael@email.com')
//   this.role = role || 'student'
// }

// Admin.prototype = Object.create(User.prototype)
// const newUser = new Admin('admin')
// console.log(newUser.showInfos())
// console.log(newUser.role)

const user = {
  init: function(name, email) {
    this.name = name
    this.email = email
  },

  showInfos: function() {
    return this.name
  }
}

const newUser = Object.create(user)
newUser.init('Michael', 'michael@email.com')
console.log(newUser.showInfos())

// console.log(user.isPrototypeOf(newUser))
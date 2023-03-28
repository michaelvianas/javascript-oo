const user = {
  name: `Michael`,
  email: `michael@email.com`,
  birthDate: `21/08/1997`,
  role: `student`,
  active: true,
  showInfos: function(){
    console.log(this.name, this.email);
  }
}

// user.showInfos();

// const show = function(){
//   console.log(this.name);
// }

// const showName = show.bind(user);
// showName();
// show();

const admin = {
  name: `Mariana`,
  email: `mariana@email.com`,
  role: `admin`,
  createCourse(){
    console.log(`Course created!`);
  }
}

Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.showInfos();
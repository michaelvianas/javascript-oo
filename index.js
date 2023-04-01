import User from './User.js';
import Professor from './Professor.js';
import Admin from './Admin.js';

//const newUser = new User(`Michael`, `michael@email.com`, `21/08/1997`);
//console.log(newUser.showInfos());

const newAdmin = new Admin(`Michael`, `michael@email.com`, `21/08/1997`);
console.log(newAdmin.name);
newAdmin.name = ``;
console.log(newAdmin.name);

export default class User {
  #name; #email; #birthDate; #role; #activityStatus;

  constructor(name, email, birthDate, role, activityStatus = true){
    this.#name = name;
    this.#email = email;
    this.#birthDate = birthDate;
    this.#role = role || `student`;
    this.#activityStatus = activityStatus;
  }

  set name(newName){
    if(newName === ``){
      throw new Error(`Not valid format`);
    }
    this.#name = newName;
  }

  get name(){
    return this.#name;
  }

  get email(){
    return this.#email;
  }

  get birthDate(){
    return this.#birthDate;
  }

  get role(){
    return this.#role;
  }

  get activityStatus(){
    return this.#activityStatus;
  }

  showInfos() {
    return `${this.#name}, ${this.#email}, ${this.#birthDate}, ${this.#role}, ${this.#activityStatus}`;
  }
}
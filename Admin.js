import User from "./User.js";

class Admin extends User {
  constructor(name, email, birthDate, role = `admin`, activityStatus = true){
    super(name, email, birthDate, role, activityStatus);
  }

  createCourse(courseName, vacancies){
    return `Course of ${courseName} created with ${vacancies} vacancies.`;
  }
}

export default Admin;
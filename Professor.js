import User from "./User.js";

class Professor extends User {
  constructor(name, email, birthDate, role = `professor`, activityStatus = true){
    super(name, email, birthDate, role, activityStatus);
  }

  toApproveStudent(student, course) {
    return `Student ${student} approved in the course ${course}`;
  }
}

export default Professor;
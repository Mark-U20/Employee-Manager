import Employee from "./Employee.js";

class Engineer extends Employee {


    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';

    }

    returnObject() {
        return {
            type: 'Engineer',
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github
        }
    }
   
    getGithub() {
        return this.github;
    }
  
    










}

export default Engineer;
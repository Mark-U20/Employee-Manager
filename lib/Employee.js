

class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
    toString(){
        return `This ${this.getId()} ${this.getName()} ${this.getRole()}`;
    }













}

export default Employee;
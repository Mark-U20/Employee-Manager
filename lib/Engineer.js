import Employee from './Employee';


class Engineer extends Employee {


    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';

    }









}

export * from Engineer;
import Engineer from './Engineer.js';


class Teams {

    constructor() {
        //create an array that holds arrays of teams of employees
        this.teams = [];
    }




    addToTeam(employee) {
        console.log("Teams class employee: " + employee);
        //log values of employee object
        // console.log("name test: " +Object.values(employee));
        this.teams.push(employee);
    }

    getTeam() {
        return this.array;
    }

    toString(){
    return "This is a team";}















}

export default Teams;
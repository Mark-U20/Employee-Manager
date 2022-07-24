import Engineer from './Engineer.js';


class Teams {

    constructor() {
        //create an array that holds arrays of teams of employees
        this.teams = [];
    }




    addToTeam(employee) {
        console.log("Teams class employee: "+employee);
        //log values of employee object
        // console.log("name test: " +Object.values(employee));
        this.teams.push(employee);
    }

    getTeam() {
        return teams;
    }















}

export default Teams;
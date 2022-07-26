import Employee from './Employee.js';
import Intern from './Intern.js';
import Engineer from './Engineer.js';
import Manager from './Manager.js';

class HTMLGenerator {


    constructor(team) {
        this.team = team;
    }



    makeTheHtml() {
        console.log("returning the makeHTML function");
        console.log("team:55 " + this.team.teams[0].getName());

        let elementLoader = this.createElements(this.team);
        console.log("after elementLoader");




        return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>My Portfolio</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
    <body class="container text-white bg-info justify-content-center">
        <div class="row bg-dark">
            <h1>Employee Manager Dashboard</h1>
                <p>------------------------------</p>
                <div class= "row">
                    <div class="col-md-4">
                        <div class="card">
                        ${elementLoader}
                        </div>
                </div>
        </div>
       

    </body>
</html>`;


    }



    createElements(team) {
        console.log("returning the createElements function");

        ///////card div//////////////
        //role div
        //name div
        //id div
        //email div etc.
        ///////////////card div//////////////

        let elementString = '';
        console.log("teamCE: " + team);

        for (let i = 0; i < team.teams.length; i++) {
            console.log("looping through the team array");

            if (team.teams[i].getRole() === 'Manager') {

                //adding all elements in string form to the elementString
                elementString += `<div class="card bg-dark text-white">
                <div class="card-header">
                    <h1>${team.teams[i].getName()}</h1>
                    <h3>${team.teams[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <h3>ID: ${team.teams[i].getId()}</h3>
                    <a href = "mailto: ${team.teams[i].getEmail()}">Email: ${team.teams[i].getEmail()}</a>
                    <h3>Office Number: ${team.teams[i].getOfficeNumber()}</h3>
                </div>
            </div>`;
            }
            else if (team.teams[i].getRole() === 'Engineer') {
                let github = 'https://github.com/' + team.teams[i].getGithub();

                elementString += `<div class="card bg-dark text-white">
                <div class="card-header">
                    <h1>${team.teams[i].getName()}</h1>
                    <h3>${team.teams[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <h3>ID: ${team.teams[i].getId()}</h3>
                    <a href = "mailto: ${team.teams[i].getEmail()}">${team.teams[i].getEmail()}</a>
                    <a href=${github}>Github: ${team.teams[i].getGithub()}</a>
                </div>
            </div>`;




            }
            else if (team.teams[i].getRole() === 'Intern') {
                elementString += `<div class="card bg-dark text-white">
                <div class="card-header">
                    <h1>${team.teams[i].getName()}</h1>
                    <h3>${team.teams[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <h3>ID: ${team.teams[i].getId()}</h3>
                    <a href = "mailto: ${team.teams[i].getEmail()}">Email: ${team.teams[i].getEmail()}</a>
                    <h3>School: ${team.teams[i].getSchool()}</h3>
                </div>
            </div>`;
            }
            else {
                console.log('error');
            }


        }

        return elementString;
    }


}

export default HTMLGenerator;
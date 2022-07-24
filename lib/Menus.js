import inquirer from 'inquirer';
import Employee from './Employee.js';
import Intern from './Intern.js';
import Engineer from './Engineer.js';
import Manager from './Manager.js';
import Teams from './Teams.js';
// let prompts = new Rx.Subject();
//register the prompt loop with inquirer in es6 syntax
//add the loop 
const team = new Teams();
let addingEmployees = true;
class Menus {



    constructor() {

        this.running = true;
    }


    //create team
    //edit team
    //quit
    mainMenu() {

        inquirer.prompt([
            {
                type: 'list',
                name: 'mainMenu',
                message: 'What would you like to do?',
                choices: ['Create Team', 'Edit Team', 'Quit'],
            }
        ]).then((answer) => {

            switch (answer.mainMenu) {
                case 'Create Team':
                    this.createTeam();
                    break;
                case 'Edit Team':
                    this.editTeam();
                    break;
                case 'Quit':
                    this.quit();
                    break;

            }
        }).catch((err) => {
            console.log(err);
        });
    }

    async createTeam() {

        console.log(team);
        console.log("First input your team's manager.");
        team.addToTeam(await this.addManager());
        console.log("Now input your team's engineers and interns.");
        //use inquirer to prompt user to add employees one by one


        // team.addToTeam(await this.addEmployee());
        console.log(team);

        while (this.running) {
            let filter = await this.addEmployee();
            if (!(filter === undefined || filter === null)) {
                team.addToTeam(filter);
            }
            console.log(team);

        }


    }






    async addEmployee() {
        let choice;
        await inquirer.prompt({
            type: 'list',
            name: 'team',
            message: 'What would you like to add?',
            choices: ['Engineer', 'Intern', 'Done'],
        }).then((answer) => {
            switch (answer.team) {
                case 'Engineer':
                    choice = this.addEngineer();
                    break;
                case 'Intern':
                    choice = this.addIntern();
                    break;

                case 'Done':
                    this.running = false;
                    return;
            }
        }).catch((err) => {
            console.log(err);
        });
        return choice;
    }






    //return object of employee
    async addEngineer() {
        let engineer;
        await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your employee\'s  name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee\'s  ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your employee\'s  email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your employee\'s GitHub Username',
            }
        ]).then((answers) => {
            engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        }).catch((err) => {
            console.log(err);
        });
        return engineer;
    }

    async addIntern() {
        let intern;
        await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your employee\'s  name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee\'s  ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your employee\'s  email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter your employee\'s school name',
            }
        ]).then((answers) => {
            //return an object with the intern's info
            intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            return;
        }).catch((err) => {
            console.log(err);
        });
        return intern;
    }

    async addManager() {
        let manager;
        await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your employee\'s  name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee\'s  ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your employee\'s  email?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'Enter your employee\'s office number',
            }
        ]).then((answers) => {
            //create manager object before returning
            manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            console.log("manager: " + manager + " answer.name: " + answers.name + " answer.id: " + answers.id + " answer.email: " + answers.email + " answer.office: " + answers.office);
        }).catch((err) => {
            console.log(err);
        });
        return manager;
    }

    editTeam() {
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        });
    }
    quit() {
        try {
            console.clear();
        }
        catch (err) {
            console.log("cant clear console");
        }
        console.log("Goodbye!");
    }



}















// const generateHTML = ({ name, location, github, linkedin }) =>
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;





export default Menus;
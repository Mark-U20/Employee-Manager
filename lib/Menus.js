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

class Menus {



    constructor() {
    }


    //create team
    //edit team
    //quit
    mainMenu() {
        console.log("3");

        inquirer.prompt([
            {
                type: 'list',
                name: 'mainMenu',
                message: 'What would you like to do?',
                choices: ['Create Team', 'Edit Team', 'Quit'],
            }
        ]).then((answer) => {
            console.log("4");

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
        console.log("4");

        console.log(team);
        console.log("First input your team's manager.");
        team.addToTeam(await this.addManager());
        console.log("Now input your team's engineers and interns.");
        //use inquirer to prompt user to add employees one by one


        team.addToTeam(await this.addEmployee());
        console.log(team);
        let addingEmployees = true;
        while (addingEmployees) {
            let checker = await this.addEmployee();
            console.log("Checker: " + checker);
            if (checker === false) {
                addingEmployees = false;
                console.log(team);
            }
            else {
                console.log(checker);
                team.addToTeam(checker);
            }

        }


    }






    async addEmployee() {
        await inquirer.prompt({
            type: 'list',
            name: 'team',
            message: 'What would you like to add?',
            choices: ['Engineer', 'Intern', 'Done'],
        }).then((answer) => {
            switch (answer.team) {
                case 'Engineer':
                    return this.addEngineer();
                case 'Intern':
                    return this.addIntern();
                case 'Done':
                    return false;
            }
        }).catch((err) => {
            console.log(err);
        });
    }






    //return object of employee
    async addEngineer() {
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
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(engineer);
            return engineer;
        }).catch((err) => {
            console.log(err);
        });
    }

    async addIntern() {
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
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            return intern;
        }).catch((err) => {
            console.log(err);
        });
    }

    async addManager() {
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
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            console.log("manager: " + manager);
            return manager;
        }).catch((err) => {
            console.log(err);
        });
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
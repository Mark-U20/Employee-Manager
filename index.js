//import all classes from the ./lib folder in es6 syntax
import Employee from './lib/Employee.js';
import Intern from './lib/Intern.js';
import Engineer from './lib/Engineer.js';
import Manager from './lib/Manager.js';
import Menus from './lib/Menus.js';
import Teams from './lib/Teams.js';


//get inquirer to prompt the user for input
import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';


//run the following animation while the program is running
// chalkAnimation.rainbow('Employee Manager');
// console.log(data);
// console.log(chalk.blue('Welcome to the Employee Manager!'));
// console.log(chalk.blue('Please select an option below:'));
// console.log(chalk.blue('---------------------------------'));
// console.log(chalk.blue('1. Add an Employee'));
// console.log(chalk.blue('2. View Employee List'));
// console.log(chalk.blue('3. Update Employee Role'));
// console.log(chalk.blue('4. Update Employee Manager'));
// console.log(chalk.blue('5. Exit'));
// console.log(chalk.blue('---------------------------------'));
// console.log(chalk.blue('Please enter your selection:'));
// console.log(chalk.blue('---------------------------------'));
const menu = new Menus();

let logo = 'Employee Manager';
console.log("1");
figlet(logo, (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    runTitle(data);
    return;

});

const sleep = (ms = 1500) => new Promise(resolve => setTimeout(resolve, ms));

async function runTitle(data){
    const animatedTitle = chalkAnimation.rainbow(data);
    await sleep();
    animatedTitle.stop();
    console.log(chalk.blue('---------------------------------'));
    console.log("2");
    await menu.mainMenu();
    console.log(menu.getTeam());
}



//to remove an npm package, use the npm uninstall packageName command

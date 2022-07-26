//import all classes from the ./lib folder in es6 syntax
import Employee from './lib/Employee.js';
import Intern from './lib/Intern.js';
import Engineer from './lib/Engineer.js';
import Manager from './lib/Manager.js';
import Menus from './lib/Menus.js';
import Teams from './lib/Teams.js';
import HTMLGenerator from './lib/HTMLGenerator.js';

//get inquirer to prompt the user for input
import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';

const menu = new Menus();
const gen = new HTMLGenerator();
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

async function runTitle(data) {
    const animatedTitle = chalkAnimation.rainbow(data);
    await sleep();
    animatedTitle.stop();
    console.log(chalk.blue('---------------------------------'));
    console.log("2");
    menu.mainMenu()

   


}




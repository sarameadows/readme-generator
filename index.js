// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to apply?',
        choices: ['MIT', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What other contributors participated in this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What kind of tests were used during development?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

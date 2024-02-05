const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'The title of my project',
    message: 'Provide the name of your Project:',
},
{
    type: 'input', 
    name: 'Description',
    message: 'Enter project description:',
},
{
    type: 'input',
    name: 'Table of Contents',
    message: 'Provide the table of contents:',
},
{
    type: 'input',
    name: 'Installation',
    message: 'Provide the installation requirements:',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Enter how to use the app:',
},
{
    type: 'input',
    name: 'License',
    message: 'Choose a license',
    choices:[
        'MIT Licence', 
        'Apache License 2.0', 
        'GNU General Public License', 
        'Berkeley Software Distribution License'
    ]
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Provide list of contributors:',
},
{
    type: 'input',
    name: 'Tests',
    message: 'Are there any tests included?',
},
{
    type: 'input',
    name: 'Questions',
    message:'What is your GitHub username?',
}, 
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Success!, the README.md file has been created!');
        }     
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((data) => {
        writeToFile("./utils/README.md", generateMarkdown(data));
        console.log(data);
    });
}

// function call to initialize program
init();

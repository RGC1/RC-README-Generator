const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Provide the name of your Project:',
},
{
    type: 'input', 
    name: 'description',
    message: 'Enter project description:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Provide the installation requirements:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter how to use the app:',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license',
    choices:[
        'MIT Licence', 
        'Apache License 2.0', 
        'GNU General Public License', 
        'ISC License'
    ]
},
{
    type: 'input',
    name: 'contributing',
    message: 'Provide list of contributors:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Are there any tests included?',
},
{
    type: 'input',
    name: 'githubUsername',
    message:'What is your GitHub username?',
},
{   type: 'input',
    name: 'email',
    message:'What is your email address?',
}
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
        writeToFile("./assets/README.md", generateMarkdown(data));
        console.log(data);
    });
}

// function call to initialize program
init();

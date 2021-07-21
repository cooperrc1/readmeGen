const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateReadme = require('../utils/generateReadme');

//Prompt the user these questions to use in the readme.
function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'projDesc',
            message: 'Describe your project'
        },
        {
            type: 'input',
            name: 'inst',
            message: 'Explain the installation process.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What do you use this project for?'
        },
        {
            type: 'list',
            name: 'lic',
            message: 'What are the licenses for this project?',
            choices: [
                "Apache",
                "ISC",
                "MIT",
                "Mozilla"
            ]
        },
        {
            type:'input',
            name:'contrib',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'gitUser',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
    ])
}

promptUser()
.then(answers => generateReadme(answers))
.then(readme =>
    {fs.writeFile("README.md", readme, err => {
        if(err) {
            console.log(err);
            return;
        }
    })
})
const inquirer = require('inquirer');
const fs = require('fs');

// function that makes prompts for the user using inquirer package
const promptUser = () => {
    
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use of this project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any contributors to the project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write any tests for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your README file.',
        choices: ['MIT', 'BSD', 'GPL']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    }
]);
};

// function that generates the content for the readme file
const readMeTemplate = response => 
    `
    # ${response.title}
    ## Description
    ${response.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Tests](#test)
    - [License](#license)
    - [Questions](#question)
    ## Installation
    ${response.installation}
    ## Usage
    ${response.usage}
    ## Credits
    ${response.credits}
    ## Tests
    ${response.test}
    ## License
    This project uses the ${response.license} license.
    ## Questions
    If you have any questions connect with me on GitHub or through Email.
    GitHub: [${response.username}](https://github.com/${response.username})
    Email: ${response.email}
    `;


// // function that creates the actual readme file
// const writeReadMe = () => {
//     fs.writeFile('./README.md', readMeTemplate(response), (err) => {
//         if (err) {
//             return console.log(err);
//         }
//     })
// }

promptUser()
.then((response) => {
    fs.writeFile('README.md', readMeTemplate(response), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('README file successfully created.')
    })
});



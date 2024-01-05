// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [{
  type: 'input',
  name: 'title',
  message: 'Project Title?'
},
{
  type: 'input',
  name: 'description',
  message: 'What is the description of your project'
},
{
  type: 'confirm',
  name: 'includeTableOfContent',
  message: 'Do you want a Table of content in your?',
  default: true,
},
{
  type: 'input',
  name: 'installation',
  message: 'Installation Instructions?'
},
{
  type: 'input',
  name: 'usage',
  message: 'Usage Information?'
},
{
  type: 'input',
  name: 'contribution',
  message: 'How to contribute'
},
{
  type: 'input',
  name: 'tests',
  message: 'What tests did you run?'
},
{
  type: 'input',
  name: 'github',
  message: 'What is your github username'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Contributions'
},
{
  type: 'list',
  name: 'contact',
  message: 'What is your preffered method of contact?',
  choices:['Phone (call)', 'Phone (Text)', 'Email', 'Snail Mail']
},
{
  type: 'input',
  name: 'contactInfo',
  message: 'Please input the contact details of your preffered method'
}
];
// TODO: Create a function to write README file
function writeToFile(data) {
  let info = generateMarkdown(data);
  fs.writeFile('README.md', info, (err) =>
    err ? console.error(err) : console.log('ReadMe Generated'))
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(answers);
    });
}


// Function call to initialize app
init();
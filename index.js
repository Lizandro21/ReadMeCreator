//dependencies
const inquirer = require('inquirer')
const fs = require('fs')

//heres the readme questions
const readmeQuestions = () =>
    inquirer.prompt([
    {
        type: "input",
        message: "What's the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "A short description of your project.",
        name: "description",
    },
    {
        type: "list",
        message: "Select any licenses that you need/used in the project. If any.",
        choices: ["ISC", 'Mozilla', "MIT", "Creative Commons license family", "None"],
        name: "license",
    },
    {
        type: "input",
        message: "Are there any instructions to install dependencies?",
        name: "installations",
    },
    {
        type: "input",
        message: "Are there any special instructions for your user to be able to use this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Are there any tests that need to run and how to use them?",
        name: "tests"
    },
    {
        type: "input",
        message: "Who is/are the creator(s) of this project?",
        name: "creators",
    },
    {
        type: "input",
        message: "What's your/teams Github username(s)?",
        name: "github",
    },
    {
        type: "input",
        message: "What's your/teams email-adress?",
        name: "email",
    },
    {
        type: "input",
        message: "Were there any contributors to the project?",
        name: "contribute",
    },
]);
//heres the function that creates the actualy read me document
function readmeCreator(answers){
    //readme being created
return`# ${answers.title}
---
## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Creators](#creators)
* [Contributing](#contributing)
---
## Description:
${answers.description}
---
## Installation:
In order to run this project follows these instructions please!:
\`\`\`${answers.installations}\`\`\`
---
## Usage:
${answers.usage}
---
## License:
 ${answers.license}
 ---
## Tests:
${answers.tests}
---
## Creators:
*Feel free to contact me for any questions!
*Name(s): ${answers.creators}
*Email(s): ${answers.email}
*Github: [GitHub](https://github.com/${answers.username})
---
## Contributing:
${answers.contribute}
`
}
//heres the readme all being made with the functions being called
readmeQuestions()
.then((answers) => {
fs.writeFile(`${answers.title}.md`, readmeCreator(answers),
    (err) => {
        err ? console.error(err) : console.log('ReadME created succesfully, YAY!')
    })}
);

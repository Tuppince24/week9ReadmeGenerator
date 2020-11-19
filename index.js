const fs = require("fs");
const util = require("util");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [{
    type:"input",
    name: "Title",
    message:"What is the name of your project?"
},
{
    type:"input",
    name: "Description",
    message:"What is the descrition of your app?"
},
{
    type:"input",
    name: "UserStory",
    message:"What is your user story?"
},
{
    type: "input",
    name: "install",
    message: "Install necessary depensencies?",
    default:"npm i"
},
{
    type: "input",
    name: "Usage",
    message:"What does the user need to know about using the repo??"
},
{
    type: "input",
    name: "WhatIs4",
    message:"how to use the app?"
},
{
    type: "input", 
    name: "License",
    message: "what licensed is your project in under?",
    default: "MIT"
},
{
    type: "input",
    name: "contributions",
    message:"What does the user need to know about contributing to the repo?"
},
{
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
},
{
    type:"input",
    name: "questions",
    message: "Best way to contact you for any questions"
}


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}



// function call to initialize program
init();

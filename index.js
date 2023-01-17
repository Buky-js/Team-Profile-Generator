// required modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const outputDirectory = path.resolve(__dirname, 'dist');
const outputFilePath = path.join(outputDirectory, 'team.html');
const createEmployees = require('./src/team.js');

employeeArr = [];

// function to start application
function init() {
    function selectEmployee() {

        inquirer.prompt([{
            type: 'list',
            message: 'What is the role of the employee you are adding to your team?',
            name: 'addEmployee',
            choices: ['Manager', 'Engineer', 'Intern', 'Team members are complete']
        }]).then(function (input) {
            switch (input.addEmployee) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    creatingHTML();


            }
        })
    }

    // functions for each employee role
    // manager role
    function addManager() {
        inquirer.prompt([

            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?"
            },

            {
                type: "input",
                name: "managerId",
                message: "What is the manager's employee ID number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?"
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            employeeArr.push(manager);
            selectEmployee();
        });

    }


    // engineer role
    function addEngineer() {
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },

            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's employee ID number?"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?"
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            employeeArr.push(engineer);
            selectEmployee();
        });



    }

    //intern role
    function addIntern() {
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },

            {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID number?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?"
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employeeArr.push(intern);
            selectEmployee();
        });

    }

    function creatingHTML() {
        console.log("The team has been created.")
        fs.writeFileSync(outputFilePath, createEmployees(employeeArr), "UTF-8");
    }
    selectEmployee();
}

init();
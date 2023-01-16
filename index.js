// required modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const outputDirectory = path.resolve(__dirname, 'dist');
const outputFilePath = path.join(outputDirectory, 'team.html');


// importing the Employee class
const Employee = require('./Employee');

//extending the functionalities of Employee class
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

    }
// returns github username
    getGithub(){
        return this.github;
    }

    // overrides the constructor in Employee class
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
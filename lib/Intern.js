// importing the Employee class
const Employee = require('./Employee.js');

//extending the functionalities of Employee class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    // get intern's school
    getSchool(){
        return this.school;
    }

    //overrides the constructor in Employee class
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;
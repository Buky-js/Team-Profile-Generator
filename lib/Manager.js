// importing the Employee class
const Employee = require('./Employee.js');

//extending the functionalities of Employee class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
// get manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }
// overrides the constructor in Employee class
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
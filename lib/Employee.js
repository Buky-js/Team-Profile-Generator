// constructor for Employee
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returns name
    getName(){
        return this.name;
    }

    //returns ID
    getId(){
        return this.id;
    }

    //returns email
    getEmail(){
        return this.email;
    }

    //returns employee role
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;
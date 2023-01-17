const Employee = require("../lib/Employee.js");
describe("Checking object and properties", () => {
    test("can create an instance of the Employee class", () => {
        const obj = new Employee();
        expect(typeof (obj)).toBe("object");
        
    })
    test("has a name property", () => {
        const name = new Employee();
        expect(name).toHaveProperty('name');    
    })
    
    test("has an id property", () => {
        const id = new Employee();
        expect(id).toHaveProperty('id');
      
    })

    test("has an email property", () => {
        const email = new Employee();
        expect(email).toHaveProperty('email');
      
    })
})

describe("Get return value through the getProperty functions", () => {
    test("get the name return value from getName function", () => {
        const testName = "Buky";
            const newObj = new Employee(testName, 2001, "bukyjames@gmail.com");
            expect(newObj.getName()).toBe(testName);
    })

    test("get the id return value from getId function", () => {
        const testId = 2001;
            const newObj = new Employee("Buky", testId, "bukyjames@gmail.com");
            expect(newObj.getId()).toBe(testId);
    })

    test("get the email return value from getEmail function", () => {
        const testEmail = "bukyjames@gmail.com";
            const newObj = new Employee("Buky", 2001, testEmail);
            expect(newObj.getEmail()).toBe(testEmail);
    })

    test("getRole function should return 'Employee'", () => {
        const testRole = "Employee";
            const newObj = new Employee("Buky", 2001, "bukyjames@gmail.com");
            expect(newObj.getRole()).toBe(testRole);
    })
})


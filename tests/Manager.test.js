const Manager = require("../lib/Manager.js");

test("can create an instance of the Manager class", () => {
    const obj = new Manager();
    expect(typeof (obj)).toBe("object");
    
})

test("has an office number property", () => {
    const obj = new Manager();
    expect(obj).toHaveProperty('officeNumber');    
})

test("get the school value from getOfficeNumber function", () => {
    const testOfficeNumber = 5063775744;
        const newObj = new Manager("Buky", 20, "bukyjames@gmail.com", testOfficeNumber);
        expect(newObj.getOfficeNumber()).toBe(testOfficeNumber);
})

test("getRole function should return 'Manager'", () => {
    const testRole = "Manager";
        const newObj = new Manager("Buky", 2001, "bukyjames@gmail.com");
        expect(newObj.getRole()).toBe(testRole);
})
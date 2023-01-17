const Intern = require("../lib/Intern.js");

// tests to check the functionalities of the Intern class

test("can create an instance of the Intern class", () => {
    const obj = new Intern();
    expect(typeof (obj)).toBe("object");
    
})

test("has a school property", () => {
    const obj = new Intern();
    expect(obj).toHaveProperty('school');    
})

test("get the school value from getSchool function", () => {
    const testSchool = "UNB";
        const newObj = new Intern("Buky", 20, "bukyjames@gmail.com", testSchool);
        expect(newObj.getSchool()).toBe(testSchool);
})

test("getRole function should return 'Intern'", () => {
    const testRole = "Intern";
        const newObj = new Intern("Buky", 2001, "bukyjames@gmail.com");
        expect(newObj.getRole()).toBe(testRole);
})
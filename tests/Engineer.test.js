const Engineer = require("../lib/Engineer.js");

// // tests to check the functionalities of the Engineer class

test("can create an instance of the Engineer class", () => {
    const obj = new Engineer();
    expect(typeof (obj)).toBe("object");
    
})

test("has a github property", () => {
    const obj = new Engineer();
    expect(obj).toHaveProperty('github');    
})

test("get the github value from getGithub function", () => {
    const testGithub = "buky-js";
        const newObj = new Engineer("Buky", 20, "bukyjames@gmail.com", testGithub);
        expect(newObj.getGithub()).toBe(testGithub);
})

test("getRole function should return 'Engineer'", () => {
    const testRole = "Engineer";
        const newObj = new Engineer("Buky", 2001, "bukyjames@gmail.com");
        expect(newObj.getRole()).toBe(testRole);
})

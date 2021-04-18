const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Extend", () => {
        it("Should add a employee called intern with the school property", () => {
            const intern = new Intern("Arecio", 123, "arecio@gmail.com","UCF");
            expect(intern).toEqual({name: "Arecio", id: 123, email: "arecio@gmail.com", school: "UCF"});
        });
    });

    test ("Can get role with getRole function", () => {
        const intern = new Intern("Intern");
        expect(intern.getRole()).toBe("Intern");
    })

    test ("Can get school with getSchool function", () => {
        const intern = new Intern("UCF");
        expect(intern.getSchool()).toBe(intern.school);
    })
})
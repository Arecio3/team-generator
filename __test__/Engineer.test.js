const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Extend", () => {
        // makes sure that engineer is adding the correct properties
        it("Should add a employee called engineer with the github username property", () => {
            const engineer = new Engineer("Arecio", 123,"arecio@gmail.com", "Arecio3");
            expect(engineer).toEqual({name: "Arecio", id: 123, email: "arecio@gmail.com", gitHub: "Arecio3"});
        });
    });

    test ("Can get role with getRole function", () => {
        const engineer = new Engineer("Engineer");
        expect(engineer.getRole()).toBe("Engineer");
    })

    test ("Can get github username with getGitHub function", () => {
        const engineer = new Engineer("Arecio", 123,"arecio@gmail.com", "Arecio3");
        console.log(engineer.gitHub);
        expect(engineer.getGitHub()).toEqual(engineer.gitHub);
    })
})
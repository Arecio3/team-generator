const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Extend", () => {
        it("Should add a employee called manager with the office number property", () => {
            const manager = new Manager("Arecio", 123, "arecio@gmail.com","404A");
            expect(manager).toEqual({name: "Arecio", id: 123, email: "arecio@gmail.com", officeNumber: "404A"});
        });
    });

    test ("Can get role with getRole function", () => {
        const manager = new Manager("Manager");
        expect(manager.getRole()).toBe("Manager");
    })

    test ("Can get office number with officeNumber function", () => {
        const manager = new Manager("404A");
        expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    })
})
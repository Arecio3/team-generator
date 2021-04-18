const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Extend", () => {
        it("Should add a new property for office number", () => {
            const manager = new Manager("404A");
            expect(manager).toEqual("404A");
        })
    })
})
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");


describe("Employee", () => {
    describe("Initial", () => {
        it("Should create an object with employee name, id, and email", () => {
            const employee = new Employee("Arecio", 123, "arecio@gmail.com");
            expect(employee).toEqual({name: "Arecio", id: 123, email: "arecio@gmail.com"});
        });
    });


    test ("Can instantiate Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })
    
    
    test ("can get name with getName function", () => {
        const employee = new Employee("Arecio");
        expect(employee.getName()).toBe(employee.name);
    })


    test ("can get id with getId function", () => {
        const employee = new Employee(123);
        expect(employee.getId()).toBe(employee.id);
    })


    test ("can get email with getEmail function", () => {
        const employee = new Employee("arecio@gmail.com");
        expect(employee.getEmail()).toBe(employee.email);
    })


    test ("can get role with getRole function", () => {
        const employee = new Employee("Employee");
        expect(employee.getRole()).toBe("Employee");
    })
    

})
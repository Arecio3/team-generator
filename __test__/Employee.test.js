const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");


describe("Employee", () => {
    describe("Initial", () => {
        // checks that its making an employee with desired core standards
        it("Should create an object with employee name, id, and email", () => {
            const employee = new Employee("Arecio", 123, "arecio@gmail.com");
            expect(employee).toEqual({name: "Arecio", id: 123, email: "arecio@gmail.com"});
        });
    });

    // makes sure Employee function is giving back an object
    test ("Can instantiate Employee", () => {
        const employee = new Employee();
        // expects all employees to be an object
        expect(typeof(employee)).toBe("object");
    })
    
    // makes sure the getName function is returning the name
    test ("can get name with getName function", () => {
        const employee = new Employee("Arecio");
        expect(employee.getName()).toBe(employee.name);
    })

    // makes sure the getId function is returning id
    test ("can get id with getId function", () => {
        const employee = new Employee(123);
        expect(employee.getId()).toBe(employee.id);
    })

    // makes sure getEmail function is returning email
    test ("can get email with getEmail function", () => {
        const employee = new Employee("arecio@gmail.com");
        expect(employee.getEmail()).toBe(employee.email);
    })

    // makes sure getRole function is returning the role
    test ("can get role with getRole function", () => {
        const employee = new Employee("Employee");
        expect(employee.getRole()).toBe("Employee");
    })
    

})
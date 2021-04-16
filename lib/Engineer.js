const Employee = require("./Employees");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    }
    getRole() {
        return "Intern";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Engineer;
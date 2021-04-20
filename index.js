// requiring all files needed 
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employees");
const Engineer = require("./lib/Engineer");
const inquirer = require("Inquirer");
const fs = require("fs");
const chalk = require("chalk");
const { log } = require("console");
const teamArray = [];
const createHTML = require("./createHtml");


// function to create questions for manager 
const createManager = () => {
    // questions for manager
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: chalk.green("Enter manager's name"),
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Please enter a valid name"
            }
        },
        {
            type: "input",
            name: "id",
            message: chalk.green("Enter manager's id"),
            validate: data => {
                if (data !== ""){
                    return true
                }
                return "Please enter a valid id"
            }
        },
        {
            type: "input",
            name: "email",
            message: chalk.green("Enter manager's email"),
            validate: data => {
                if (data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a a valid email"
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: chalk.green("Enter manager's office number"),
            validate: data => {
                if (data !== ""){
                    return true
                }
                return "Please enter a office number"
            }
        },
        {
            type: "list",
            name: "newMember",
            message: "Would you like to add a new team member",
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else'],
        },
        // takes all answer and puts them in a object
    ]).then((answers) => {
        // makes the new manager wiht passed in choices
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        // pushes new manager to team array
       
        // createManager();

        teamArray.push(manager);
        let keepGoing = answers.newMember !== 'I do not need to add anyone else';
        let memberType = answers.newMember;

        if(!keepGoing) {
            makeFile();
            return;
        }

        while (keepGoing) {
            if (memberType === 'Engineer') {
                createEngineer(); 
            }
            else if (memberType === 'Intern') {
                createIntern();   
            }
            else if (memberType === 'Manager') {
                createManager(); 
            }
            return
        }
        console.log(teamArray);
    })
    
}


// function to creat intern
const createIntern = () => {
    // questions for making intern
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: chalk.blue("Enter intern's name"),
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Please enter a valid name"
            }
        },
        {
            type: "input",
            name: "id",
            message: chalk.blue("Enter intern's id"),
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Please enter a office number"
            }
        },
        {
            type: "input",
            name: "email",
            message: chalk.blue("Enter intern's email"),
            validate: data => {
                if (data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a valid email"
            }
        },
        {
            type: "input",
            name: "school",
            message: chalk.blue("Enter intern's school"),
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Please enter a valid school"
            }
        },
        {
            type: "list",
            name: "newMember",
            message: "Would you like to add a new team member",
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else'],
        },

    ]).then((answers) => {
        // makes the new manager with passed in choices
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        // pushes new manager to team array
       
        // createManager();
        teamArray.push(intern)
        let keepGoing = answers.newMember !== 'I do not need to add anyone else';
        let memberType = answers.newMember;

        if(!keepGoing) {
            makeFile();
            return;
        }

        while (keepGoing) {
            if (memberType === 'Engineer') {
                createEngineer(); 
            }
            else if (memberType === 'Intern') {
                createIntern();   
            }
            else if (memberType === 'Manager') {
                createManager(); 
            }
            return
        }
        
        console.log(teamArray);
    })
}

// function to create engineer 
const createEngineer = () => {
    // questions for engineer
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: chalk.yellow("Enter engineer's name"),
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Please enter a valid name"
            }
        },
        {
            type: "input",
            name: "email",
            message: chalk.yellow("Enter engineer's email"),
            validate: data => {
                if (data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a valid email"
            }
        },
        {
            type: "input",
            name: "id",
            message: chalk.yellow("Enter engineer's id"),
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Please enter a valid id"
            }
        },
        {
            type: "input",
            name: "gitHub",
            message: chalk.yellow("Enter engineer's Github username"),
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Please enter a valid username"
            }
        },
        {
            type: "list",
            name: "newMember",
            message: "Would you like to add a new team member",
            choices: ['Manager', 'Engineer', 'Intern', 'I do not need to add anyone else'],
        },

    ]).then((answers) => {
        // makes the new manager wiht passed in choices
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        // pushes new manager to team array
       
        // createManager();

        teamArray.push(engineer);
        let keepGoing = answers.newMember !== 'I do not need to add anyone else';
        let memberType = answers.newMember;

        if(!keepGoing) {
            makeFile();
            return;
        }

        while (keepGoing) {
            if (memberType === 'Engineer') {
                createEngineer(); 
            }
            else if (memberType === 'Intern') {
                createIntern();   
            }
            else if (memberType === 'Manager') {
                createManager(); 
            }
            return
        }
        console.log(teamArray);
    })
}

createManager();

const makeFile = () => {

    fs.writeFile('index.html', createHTML(teamArray), (err) => err ? console.error(error) : console.log("Made the index.html!!"));
}

// init();

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//list properties and methods
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    //overridden to return engineer
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
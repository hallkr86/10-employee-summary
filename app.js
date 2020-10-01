const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamArray = [];




firstQuestion = [{
    type: "list",
    name: "role",
    message: "Please select your role",
    choices: ["Engineer", "Intern", "Manager"]
}]

engineerQuestions = [
{
    type: "input",
    name: "name",
    message: "Please enter your name"
},
{
    type: "input",
    name: "id",
    message: "Please enter your id number"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address"
},
{
    type: "input",
    name: "github",
    message: "Please enter your Github username"   
}
];

internQuestions = [
{
    type: "input",
    name: "name",
    message: "Please enter your name"
},
{
    type: "input",
    name: "id",
    message: "Please enter your id number"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address"
},
{
    type: "input",
    name: "school",
    message: "Please enter the school you are attending"   
}
]; 

managerQuestions = [
{
    type: "input",
    name: "name",
    message: "Please enter your name"
},
{
    type: "input",
    name: "id",
    message: "Please enter your id number"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address"
},
{
    type: "input",
    name: "officeNumber",
    message: "Please enter your office number"   
}]

function teamProfile(){
    inquirer
        .prompt(firstQuestion)
        .then(function(response) {
            if(response.role === "Engineer"){
                createEngineerProfile();
            }else if (response.role === "Intern"){
                createInternProfile();
            }else if (response.role === "Manager"){
                createManagerProfile();
            }else{
                createTeam();
            }
})
}

function stopPrompt(){
    inquirer
    .prompt([
        {
        type: "confirm",
        name: "continue",
        message: "Would you like to continue?"
        }
]).then(function(res){
    if(res.continue){
        teamProfile();
    }else{
        createTeam();
    }
})
}
teamProfile();

function createTeam(){
    const teamData = render(teamArray);
    fs.writeFile(outputPath, teamData, function(err){
    if (err) throw err;   
});
}

function createEngineerProfile(){
    console.log("Engineer");
    inquirer.prompt(engineerQuestions).then(function (response){
        let mark = new Engineer(response.name, response.id, response.email, response.officeNumber)
        console.log(mark);
        teamArray.push(mark);
        stopPrompt();

    }).catch (function(err){
        console.log(err)
    });
}

function createInternProfile(){
    console.log("Intern");
    inquirer.prompt(internQuestions).then(function (response){
        let troy = new Intern(response.name, response.id, response.email, response.school)
        console.log(troy);
        teamArray.push(troy);
        stopPrompt();

    }).catch (function(err){
        console.log(err)
    });
}

function createManagerProfile(){
    console.log("Manager");
    inquirer.prompt(managerQuestions).then(function (response){
        let lisa = new Intern(response.name, response.id, response.email, response.officeNumber)
        console.log(lisa);
        teamArray.push(lisa);
        stopPrompt();

    }).catch (function(err){
        console.log(err)
    });
}



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

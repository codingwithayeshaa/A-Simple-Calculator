#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter First number:", type:"number", name:"firstNumber"},
    {message:"Enter Second number:", type:"number", name:"secondNumber"},
    {
        message:"Select one of the following operators:",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);

// Using if-else conditions
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("Enter valid number")
}


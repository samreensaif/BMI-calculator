import inquirer from "inquirer";

console.log( `\n\t\t YOUR BODY MASS INDEX\n\n`)

  let answer= await inquirer.prompt([ {
    
    name: "height",
    type: "input",    
    message: " what is your height in meters? "
  },
{

  name: "weight",
  type: "input",
  message:" what is your weight in kg?"
}

]);

//console.log( `\n\t\t YOUR BODY MASS INDEX\n\n`)
let bmi: number = answer.weight/ (answer.height*answer.height);
console.log (`Your weight is ${answer.weight}kg 
your height is ${answer.height}m
your BMI is ${bmi} ` );
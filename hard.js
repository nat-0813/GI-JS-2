// HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Store Tom & Jerry’s mass and height as variables. 
// Calculate both their BMI’s. 
// Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
// Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).


let tomHeight = 0.2286; //in meters
let tomMass = 0.008; //in kg

let jerryHeight= 0.254; //in meters
let jerryMass = 0.045; //in kg

//BMI calculation
let tomBMI = tomMass / (tomHeight * tomHeight); 
let jerryBMI = jerryMass / (jerryHeight * jerryHeight);
console.log(tomBMI, jerryBMI); // prints tom and jerrys bmI's

function higherBMI () { 
    return tomBMI > jerryBMI ? "true" : "false"; // if condition of Tom's BMI is greater than Jerrys than the condition is true, if not false
}
console.log('is toms bmi higher than jerrys?'); //print string
console.log(higherBMI()); // print condition from function
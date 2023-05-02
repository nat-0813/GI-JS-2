alert("Welcome!"); //alert method to welcome the user
const userInput = prompt("Please enter a number that is 1-12"); //prompt method used to take user input (enter a number)

//function using if else statement to return month of corresponding number that user enters
//if a number that is not 1-12 is entered, return statement.
function returnMonth(number) {
  if (number === 1) {
    return "January";

  } else if (number === 2) {
    return "February";

  } else if (number === 3) {
    return "March";

  } else if (number === 4) {
    return "April";

  } else if (number === 5) {
    return "May";

  } else if (number === 6) {
    return "June";

  } else if (number === 7) {
    return "July";

  } else if (number === 8) {
    return "August";

  } else if (number === 9) {
    return "September";

  } else if (number === 10) {
    return "October";

  } else if (number === 11) {
    return "November";

  } else if (number === 12) {
    return "December";

  } else {
    console.log("That is not a number 1-12");
  }
}

console.log(returnMonth(parseInt(userInput))); //converts user input from a string to a number
/*
 Elizabeth Sutton
 SDI Section 2
 Conditionals Assignment
 4/23/15
 */

/*You found a car you want to buy. How much will the monthly payments be? Can you afford it?

 prompt: what is the year, make and model?
 prompt: how much does car cost? (given)
 prompt: what is your monthly allowance to spend on a car? (given)
 prompt: what is your monthly income? (given)
 calculate:
 1. Monthly payment of car
 2. Car payment vs. budget

 /*cost X rate = totalLoan
 totalLoan / term = monthly payment
 */

/*
 (carCost * carRate) = totalLoan
 totalLoan / term = monthlyPayment
 allowance - monthlyPayment = if True, you can buy the car; if False, you cannot afford the car.
 */



var car = prompt("So you want to buy a car. What is the year, make and model of the vehicle?");//irrelevent to calculation; use for final print out
var cost = prompt("What is the cost of the vehicle?");//needed for loan amt calculation
var allowance = prompt("How much do you want to spend on a car payment each month?");//needed for budget calculation

var arr = ["36", "48"]; //array is established
var term = prompt("How many months would you like to finance your loan? " + arr[0] + " or " + arr[1] + " months?"); //array offers options

//feedback to user via if else statement
if(arr[0]) {
    console.log("You've chosen a" + arr[0] + " month loan.");
}else{
    console.log("You've chosen a" + arr[1] + " month loan.");
}

var income = prompt("What is your monthly income?");//variable for budget calculation

var rate = 1.04;
var totalLoan = (cost * rate);
var monthlyPayment = cost * term; //use of arithmetic operator


//LOGICAL OPERATOR   Can I afford the monthly payment for this car?
//If monthly payment is less than my allowance, I can afford this car.
if(monthlyPayment < allowance && income > allowance){
    console.log("You can afford this car");
}else{
    console.log("Sorry, you cannot afford this car.");
}








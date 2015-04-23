/*
 Elizabeth Sutton
 SDI Section 2
 Conditionals Assignment
 4/23/15
 */

/*You found a car you want to buy. How much will the monthly payments be? Can you afford it?
  1. Based on year of car, determine if it's considered new or used (determines loan rate and term)
  2. Determine monthly payment based on cost, loan rate and term
  3. Determine if you can afford this payment based on your monthly allowance and income


 prompt: how much does car cost? (given)
 prompt: what is the year, make and model?
 prompt: what is your monthly allowance to spend on a car? (given)
 prompt: what is your monthly income? (given)
 calculate:
 1. Monthly payment of car
 2. Car payment vs. budget
 */


//1. Determine if car is new or used
//TERNARY OPERATOR
var age = prompt("So you want to buy a car. First, let's determine if it's considered new or used.\n\nPlease enter the age of the vehicle in years:");
var car;




//2. Determine monthly payment
//ARITHMETIC OPERATORS
/*loan amount X intRate = interest
 interest + loanAmt = totalLoan
 totalLoan / loanTerm = monthly payment
 */

var carCost = prompt("How much does the car cost?\nDo not use commas or decimals. Use whole numbers only.");
var allowance = prompt("How much do you want to spend on a car payment each month?");

var used;
var usedCarRate = 1.08;
var newCarRate = 1.03;
var usedCarTerm = 36;
var newCarTerm = 60;


/*
(carCost * carRate) = totalLoan
totalLoan / carTerm = monthlyPayment
allowance - monthlyPayment = if True, you can buy the car; if False, you cannot afford the car.
 */


//CONDITIONAL STATEMENTS
if(used) {
    usedCarRate();
}else{
    newCarRate();
}


if(used) {
    usedCarTerm();
}else{
    newCarTerm();
}

console.log();


//LOGICAL OPERATOR   Can I afford the monthly payment for this car?
//If monthly payment is less than my allowance, I can afford this car.
var allowance = 500;
var monthlyPayment;
var income = 1200;

if(monthlyPayment < allowance && income > allowance){
    console.log("You can afford this car");
}else{
    console.log("Sorry, you cannot afford this car.");
}








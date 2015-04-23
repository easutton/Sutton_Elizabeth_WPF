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





var car = prompt("So, you want to buy a car. What is the year, make and model of the vehicle?");//irrelevent to calculation; use for final print out
var cost = prompt("What is the cost of the vehicle?\n(Please enter whole numbers only. Do not use any symbols or punctuation.)");//needed for loan amt calculation


var arr = ["36", "48"]; //array is established
var term = prompt("How many months would you like to finance your loan? " + arr[0] + " or " + arr[1] + " months?"); //array offers options

var rate = 1.04;

//calculate and print result
var totalLoan = cost * rate; //use of arithmetic operator
alert("Okay. We've calculated that at an interest rate of 8%, the total amount to be borrowed is $" + totalLoan + " for a term of " + term + " months.")\n\n("Now let's take a look at your finances."); //calculation coded as an expression
console.log(); //asked for result to be printed

//feedback to user via if else statement
/*if(arr[0]) {
    alert("You've chosen a " + arr[0] + " month loan. Now let's take a look at your income.");
}else{
    alert("You've chosen a " + arr[1] + " month loan. Now let's take a look at your income.");
}*/

var income = prompt("What is your monthly income?\n(Please enter whole numbers only. Do not use any symbols or punctuation.)");//variable for budget calculation



var monthlyPayment = totalLoan / term;
monthlyPayment.toFixed(2);
alert("Your calculated monthly payment for a " + car + " is $" + monthlyPayment); //calculation coded as an expression

var allowance = prompt("How much do you want to spend on a car payment each month?");//needed for budget calculation

//use of logical operator   "Can I afford the monthly payment for this car?"
//If monthly payment is less than my allowance, I can afford this car.
if(monthlyPayment < allowance && income > allowance){
    console.log("You can afford this car!");
}else{
    console.log("Sorry, you cannot afford this car.");
}

/*
 totalLoan = (carCost * carRate)
 monthlyPayment = totalLoan / term
 if monthlyPayment < allowance = you can buy the car; if >, you cannot afford the car.
 */











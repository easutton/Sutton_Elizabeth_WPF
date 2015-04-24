/*
 Elizabeth Sutton
 SDI Section 2
 Conditionals Assignment
 4/23/15
 */

/*You found a car you want to buy. How much will the monthly payments be? Can you afford it?

THE MATH:
totalLoan = (carCost * carRate)
monthlyPayment = totalLoan / term
if monthlyPayment < allowance = you can buy the car; if >, you cannot afford the car.
 */


var car = prompt("So, you want to buy a car. What is the year, make and model of the vehicle?");//prompt #1
var cost = prompt("What is the cost of the vehicle?\n(Please enter whole numbers only. Do not use any symbols or punctuation.)");//prompt #2

var rate = 1.08;

//calculate and print result
var totalLoan = cost * rate; //arithmetic operator
alert("Okay. We've calculated that at an interest rate of 8%, the total amount to be borrowed is $" + totalLoan.toFixed(2) + "."); //calculation coded as an expression

var arr = ["36", "48"]; //array is established
var term = prompt("How many months would you like to finance your loan? " + arr[0] + " or " + arr[1] + " months?"); //array offers options; prompt #3

var monthlyPayment = totalLoan / term; //arithmetic operator
monthlyPayment.toFixed(2);
alert("Based on the loan terms you chose, your calculated monthly payment for a " + car + " is $" + monthlyPayment + " for a term of " + term + " months.\n\nNow let's take a look at your finances."); //calculation coded as an expression

var income = prompt("What is your monthly income?\n(Please enter whole numbers only. Do not use any symbols or punctuation.)");//variable for budget calculation

var allowance = prompt("How much do you want to spend on a car payment each month?");//needed for budget calculation

//Can I afford the monthly payment for this car?
//If monthly payment is less than my allowance, I can afford this car.
if(monthlyPayment <= allowance && income >= allowance){ //logical operator and conditional statement
    console.log("Congratulations! You can afford this car!");
}else{
    console.log("Sorry, you cannot afford this car.");
}

//if the credit score is => 500, you can get a loan
var creditScore = prompt("What is your current credit score?");//ternary conditional statement
(creditScore >= 500) ? alert("You qualify for a loan.") : alert("Sorry, your credit score is too low to qualify for a loan.");

/* TESTING
 I typed in 2003 Honda Accord and 4500 for the cost and it returned: "Okay. We've calculated that at an interest rate of 8%, the total amount to be borrowed is $4860.00."
 I then said I wanted to finance for 36 months. It returned: "Based on the loan terms you chose, your calculated monthly payment for a 2003 Honda Accord is $135 for a term of
 36 months. Now let's take a look at your finances."
 I then typed in 2000 for my monthly income and 200 as the amount I wanted to spend on my car payment each month. I entered a 480 as my credit score and it returned:
 "Sorry, your credit score is too low to qualify for a loan."
 */










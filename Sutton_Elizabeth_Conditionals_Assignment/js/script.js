/*
 Elizabeth Sutton
 SDI Section 2
 Conditionals Assignment
 4/23/15
 */

/*How much will your monthly payment be on your new car?
    prompt: new or used?
    prompt: make and model?
    prompt: cost of vehicle?
*/

var loanAmt;
var loanTerm = choose 36, 48 or 60 months
var intRate = 6%;

//ARITHMETIC OPERATORS
/*loan amount X intRate = interest
interest + loanAmt = totalLoan
totalLoan / loanTerm = monthly payment
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

//TERNARY OPERATOR
var age = 4;
var car;

//If the car is more than 5 years old, then it's a used car.
car = (age > 5) ? "used car" : "new car";
console.log(car);



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
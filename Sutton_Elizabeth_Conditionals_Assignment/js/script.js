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

//Arithmetic Operators
/*loan amount X intRate = interest
interest + loanAmt = totalLoan
totalLoan / loanTerm = monthly payment
*/

//Conditional Statements
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

//Ternary Operator
var age = 4;
var car;

//If the car is more than 5 years old, then it's a used car.
car = (age > 5) ? "used car" : "new car";
console.log(car);
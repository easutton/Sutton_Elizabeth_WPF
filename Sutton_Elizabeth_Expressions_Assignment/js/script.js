/*
Elizabeth Sutton
SDI Section 2
Expression Assignment
4/12/15
 */

//Calculate your home's price per square foot

//Givens: overall square footage of home, square footage of nonliving spaces, price paid for home

var overallFootage = prompt("In order to calculate the price per square foot, please enter the total square footage of your home:");
var nonLiving = prompt("Enter the square footage of the nonliving spaces:");
var pricePaid = prompt("Enter the amount you paid for your home:")
var priceSF = pricePaid / (overallFootage - nonLiving);
alert("The price of your home per square foot is " + priceSF);
console.log

//include an array
var arr = ["Helpful", "Not helpful"];
var question = prompt("Did you find this calculator " + arr[0] + " or " arr[1] + "?");






/*
DON'T FORGET TO ADD TEST VALUES AT END, COMMENTED IN!!!
i.e. "I typed in 5 for length and 6 for height and my calculator gave me 30 for the area."

DON'T FORGET, YOU MUST MAKE AT LEAST 5 COMMITS!!

"Hard coded" means to type in a specific value.

Number(ageNow) < casts the var as a digit number, not canatonizing text
OR
parseInt(ageNow) which determines that the first character of ageNow is a digit and treats the whole
thing like a number


 */
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

//include an array
var arr = ["apartment", "condo/townhouse", "house"];
var question = prompt("Do you live in a " + arr[0] + " , " + arr[1] + " or " + arr[2] + "?");

var priceSF = pricePaid / (overallFootage - nonLiving);
alert("The price per square foot of your " + question + " is $" + priceSF + " per square foot." );
console.log();



/*
I typed in 1511 as my overall square footage, 15 as my nonliving space footage, 100000 as the cost of my home and I said
that mine is a house and it gave me: "The price per square foot of your house is 66.66666666666666667 per square foot."

 I typed in 2100 as my overall square footage, 117 as my nonliving space footage, 302,500 as the cost of my home and I said
 that mine is a house and it gave me: "The price per square foot of your house is $NaN per square foot."
 */




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
/*
Elizabeth Sutton
SDI Section 2
Expression Assignment
4/16/15
*/

//Calculate your home's price per square foot
alert("To calculate the price per square foot of your home, \nplease complete the following prompts. \n\nDo not use commas or decimals. Use whole numbers only.");


//Givens: overall square footage of home, square footage of nonliving spaces, price paid for home
var overallFootage = prompt("Please enter the total square footage of your home:");
var nonLiving = prompt("Enter the square footage of the nonliving spaces:");
var pricePaid = prompt("Enter the amount you paid for your home: \n(Remember, do not use commas or decimals. Use whole numbers only.)");


//include an array in calculation
var arr = ["apartment", "condo/townhouse", "house"];
var question = prompt("Do you live in a " + arr[0] + " , " + arr[1] + " or " + arr[2] + "?");


//calculate and print result
var priceSF = pricePaid / (overallFootage - nonLiving);
alert("The price per square foot of your " + question + " is $" + priceSF + " per square foot." );
console.log();



/*
I typed in 1511 as my overall square footage, 15 as my nonliving space footage, 100000 as the cost of my home and I said
that mine is a house and it gave me: "The price per square foot of your house is 66.66666666666666667 per square foot."

I typed in 2100 as my overall square footage, 117 as my nonliving space footage, 302,500 as the cost of my home and I said
that mine is a house and it gave me: "The price per square foot of your house is $NaN per square foot."

I typed in 1734 as my overall square footage, 156 as my nonliving space footage, 167900 as the cost of my home and I said
that mine is a condo and it gave me: "The price per square foot of your condo is $106.40050697084918 per square foot."

I typed in 1346 as my overall square footage, 109 as my nonliving space footage, 412560 as the cost of my home and I said
that mine is a condo and it gave me: "The price per square foot of your apartment is $333.51657235246563 per square foot."

Where I got the idea for this calculator assignment: http://www.ehow.com/how_4475776_calculate-price-per-square-foot.html
*/